import React, { useState, useEffect, useRef, useCallback, Component, ErrorInfo, ReactNode } from 'react';
import { BootSequence } from './components/terminal/BootSequence';
import { StepNavigator, stepsList } from './components/layout/StepNavigator';
import { Step1Hero } from './sections/steps/Step1Hero';
import { Step2Education } from './sections/steps/Step2Education';
import { Step3Experience } from './sections/steps/Step3Experience';
import { Step4Projects } from './sections/steps/Step4Projects';
import { Step5Skills } from './sections/steps/Step5Skills';
import { Step6Achievements } from './sections/steps/Step6Achievements';
import { Step7Contact } from './sections/steps/Step7Contact';
import { VenkyAssistant } from './components/assistant/VenkyAssistant';
import { ProjectModal } from './components/project/ProjectModal';
import { projectsData } from './data/projects';
import { matchAssistantQuery, SpeechService } from './services/assistantEngine';
import { Sparkles, AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Command Center:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#000000] text-[#EAF5FF] font-mono flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#050B14] border border-red-500 rounded-lg p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span>COMMAND_CENTER // SYSTEM RECOVERY</span>
            </div>
            <p className="text-xs text-[#91A8BF]">
              A runtime anomaly occurred: {this.state.error?.message}
            </p>
            <button
              onClick={() => {
                sessionStorage.clear();
                window.location.href = window.location.pathname;
              }}
              className="px-4 py-2 bg-[#00D4FF] hover:bg-white text-black font-bold text-xs rounded transition-all cursor-pointer"
            >
              Reboot Command Center
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export function AppContent() {
  const [bootCompleted, setBootCompleted] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('noboot') === 'true') return true;
    return sessionStorage.getItem('boot_done') === 'true';
  });

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(() => {
    if (typeof window === 'undefined') return 0;
    const urlParams = new URLSearchParams(window.location.search);
    const stepParam = urlParams.get('step');
    if (stepParam) {
      const parsed = parseInt(stepParam, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < stepsList.length) return parsed;
      const namedIndex = stepsList.findIndex(s => s.id.toLowerCase() === stepParam.toLowerCase() || s.cmd.toLowerCase() === stepParam.toLowerCase());
      if (namedIndex !== -1) return namedIndex;
    }
    return 0;
  });
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Global Speech States
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      const rec = new SpeechRec();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = 'en-US';

      rec.onstart = () => {
        setIsListening(true);
      };

      rec.onresult = (event: any) => {
        setIsListening(false);
        const transcript = event.results[0][0].transcript;
        handleGlobalAssistantQuery(transcript);
      };

      rec.onerror = () => {
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    }
  }, [voiceEnabled]);

  const handleFinishBoot = useCallback(() => {
    sessionStorage.setItem('boot_done', 'true');
    setBootCompleted(true);
  }, []);

  const handleToggleGlobalMic = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        SpeechService.stopSpeaking();
        setIsSpeaking(false);
        try {
          recognitionRef.current.start();
        } catch (e) {
          console.warn(e);
        }
      } else {
        // Fallback: Open Assistant Terminal Drawer
        setIsAssistantOpen(true);
      }
    }
  };

  const navigateToSectionOrStep = (target: string) => {
    // Map section IDs to Step indexes
    const stepMap: Record<string, number> = {
      'identity': 0,
      'hero': 0,
      'about': 0,
      'education': 1,
      'academics': 1,
      'experience': 2,
      'internships': 2,
      'projects': 3,
      'systems': 3,
      'skills': 4,
      'toolchain': 4,
      'achievements': 5,
      'credentials': 5,
      'contact': 6,
      'comms': 6
    };

    if (target in stepMap) {
      setCurrentStepIndex(stepMap[target]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGlobalAssistantQuery = (query: string) => {
    const matched = matchAssistantQuery(query);

    // Speak response
    if (voiceEnabled && SpeechService.isSpeechSynthesisSupported()) {
      setIsSpeaking(true);
      SpeechService.speak(
        matched.spokenText,
        () => setIsSpeaking(false),
        () => setIsSpeaking(false)
      );
    }

    // Step navigation guidance!
    if (matched.navigationTarget) {
      navigateToSectionOrStep(matched.navigationTarget);
    }

    // Modal action
    if (matched.action === 'openModal' && matched.actionPayload) {
      setSelectedProjectId(matched.actionPayload);
    } else if (matched.action === 'downloadResume') {
      const link = document.createElement('a');
      link.href = '/assets/Venkatesh_CL_RESUME.pdf';
      link.download = 'Venkatesh_CL_RESUME.pdf';
      link.click();
    }
  };

  const activeProject = projectsData.find(p => p.id === selectedProjectId) || null;

  return (
    <div className="min-h-screen bg-[#000000] text-[#EAF5FF] font-mono selection:bg-[#00D4FF] selection:text-[#000000] relative cyber-grid">
      {/* 1. Terminal Boot Sequence Overlay */}
      {!bootCompleted && (
        <BootSequence onComplete={handleFinishBoot} />
      )}

      {/* 2. Top Step Pipeline & Navigator */}
      <StepNavigator
        currentStepIndex={currentStepIndex}
        onSelectStep={(idx) => {
          setCurrentStepIndex(idx);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        voiceEnabled={voiceEnabled}
        onToggleVoice={() => {
          if (voiceEnabled) {
            SpeechService.stopSpeaking();
            setIsSpeaking(false);
            setVoiceEnabled(false);
          } else {
            setVoiceEnabled(true);
          }
        }}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* 3. Active Step View (Step-by-step with animated transitions) */}
      <main className="pt-16 pb-12 transition-all duration-300">
        {currentStepIndex === 0 && (
          <Step1Hero
            onNextStep={() => setCurrentStepIndex(1)}
            onOpenAssistant={() => setIsAssistantOpen(true)}
            isListening={isListening}
            isSpeaking={isSpeaking}
            onToggleMic={handleToggleGlobalMic}
          />
        )}

        {currentStepIndex === 1 && (
          <Step2Education
            onPrevStep={() => setCurrentStepIndex(0)}
            onNextStep={() => setCurrentStepIndex(2)}
          />
        )}

        {currentStepIndex === 2 && (
          <Step3Experience
            onPrevStep={() => setCurrentStepIndex(1)}
            onNextStep={() => setCurrentStepIndex(3)}
          />
        )}

        {currentStepIndex === 3 && (
          <Step4Projects
            onPrevStep={() => setCurrentStepIndex(2)}
            onNextStep={() => setCurrentStepIndex(4)}
            onOpenProjectModal={(id) => setSelectedProjectId(id)}
          />
        )}

        {currentStepIndex === 4 && (
          <Step5Skills
            onPrevStep={() => setCurrentStepIndex(3)}
            onNextStep={() => setCurrentStepIndex(5)}
          />
        )}

        {currentStepIndex === 5 && (
          <Step6Achievements
            onPrevStep={() => setCurrentStepIndex(4)}
            onNextStep={() => setCurrentStepIndex(6)}
          />
        )}

        {currentStepIndex === 6 && (
          <Step7Contact
            onPrevStep={() => setCurrentStepIndex(5)}
            onRestartTour={() => setCurrentStepIndex(0)}
          />
        )}
      </main>

      {/* 4. Floating VENKY AI Command Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          className={`px-4 py-2.5 rounded-full border shadow-[0_0_25px_rgba(0,212,255,0.4)] flex items-center gap-2 font-bold text-xs select-none transition-all duration-300 cursor-pointer ${
            isAssistantOpen
              ? 'bg-[#002244] text-white border-[#00D4FF]'
              : 'bg-[#00D4FF] hover:bg-white text-black border-[#00D4FF]'
          }`}
          title="Open VENKY AI Voice & Command Assistant"
        >
          <Sparkles className="w-4 h-4" />
          <span>TALK TO VENKY AI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* 5. Slide-over VENKY AI Drawer */}
      {isAssistantOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] shadow-2xl animate-in slide-in-from-right duration-300">
          <VenkyAssistant
            onNavigateSection={(sec) => {
              navigateToSectionOrStep(sec);
            }}
            onOpenProjectModal={(pId) => {
              setSelectedProjectId(pId);
            }}
            isFloatingOpen={isAssistantOpen}
            onToggleFloating={() => setIsAssistantOpen(false)}
          />
        </div>
      )}

      {/* 6. Project Detail Dossier Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}

export default App;
