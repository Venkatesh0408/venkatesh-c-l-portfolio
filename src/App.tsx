import React, { useState, useEffect, useRef } from 'react';
import { BootSequence } from './components/terminal/BootSequence';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './sections/HeroSection';
import { BottomPanels } from './components/layout/BottomPanels';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { LanguagesSection } from './sections/LanguagesSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { VenkyAssistant } from './components/assistant/VenkyAssistant';
import { ProjectModal } from './components/project/ProjectModal';
import { projectsData, ProjectItem } from './data/projects';
import { matchAssistantQuery, SpeechService } from './services/assistantEngine';
import { Bot, Sparkles, X, Terminal } from 'lucide-react';

export function App() {
  const [bootCompleted, setBootCompleted] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('noboot') === 'true') return true;
    return sessionStorage.getItem('boot_done') === 'true';
  });
  const [activeSection, setActiveSection] = useState<string>('hero');
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

  const handleFinishBoot = () => {
    sessionStorage.setItem('boot_done', 'true');
    setBootCompleted(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

    // Scroll to section
    if (matched.navigationTarget) {
      handleNavigate(matched.navigationTarget);
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
    <div className="min-h-screen bg-[#0B0F1A] text-[#EAF5FF] font-mono selection:bg-[#00D4FF] selection:text-[#0B0F1A] relative cyber-grid">
      {/* 1. Terminal Boot Sequence */}
      {!bootCompleted && (
        <BootSequence onComplete={handleFinishBoot} />
      )}

      {/* 2. Top Command Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onToggleAssistant={() => setIsAssistantOpen(!isAssistantOpen)}
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
      />

      {/* 3. Main Hero Console Cockpit */}
      <HeroSection
        onNavigate={handleNavigate}
        onOpenAssistant={() => setIsAssistantOpen(true)}
        isListening={isListening}
        isSpeaking={isSpeaking}
        onToggleMic={handleToggleGlobalMic}
        onAskQuestion={handleGlobalAssistantQuery}
      />

      {/* 4. Bottom Panels (Animations Storyboard, AI Bot Live Hub, Key Info & Theme) */}
      <BottomPanels
        onAskQuestion={handleGlobalAssistantQuery}
        isListening={isListening}
        isSpeaking={isSpeaking}
        onToggleMic={handleToggleGlobalMic}
      />

      {/* 5. Detailed Case Studies & Engineering Sections */}
      <div className="space-y-6">
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection onOpenProjectModal={(id) => setSelectedProjectId(id)} />
        <SkillsSection />
        <AchievementsSection />
        <LanguagesSection />
        <ContactSection />
      </div>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Floating VENKY AI Command Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          className={`px-4 py-2.5 rounded-full border shadow-[0_0_20px_rgba(0,212,255,0.4)] flex items-center gap-2 font-bold text-xs select-none transition-all duration-300 ${
            isAssistantOpen
              ? 'bg-[#14243A] text-white border-[#00D4FF]'
              : 'bg-[#00D4FF] hover:bg-white text-black border-[#00D4FF]'
          }`}
          title="Open VENKY AI Voice & Command Assistant"
        >
          <Sparkles className="w-4 h-4" />
          <span>TALK TO VENKY AI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* 8. Slide-over VENKY AI Drawer */}
      {isAssistantOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] shadow-2xl animate-in slide-in-from-right duration-300">
          <VenkyAssistant
            onNavigateSection={(sec) => {
              handleNavigate(sec);
            }}
            onOpenProjectModal={(pId) => {
              setSelectedProjectId(pId);
            }}
            isFloatingOpen={isAssistantOpen}
            onToggleFloating={() => setIsAssistantOpen(false)}
          />
        </div>
      )}

      {/* 9. Project Detail Dossier Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </div>
  );
}

export default App;
