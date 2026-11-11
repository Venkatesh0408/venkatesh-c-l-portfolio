import React, { useState, useEffect, useCallback, Component, ErrorInfo, ReactNode } from 'react';
import { ModernNavbar } from './components/layout/ModernNavbar';
import { ModernFooter } from './components/layout/ModernFooter';
import { ModernHero } from './sections/ModernHero';
import { ModernAbout } from './sections/ModernAbout';
import { ModernEducation } from './sections/ModernEducation';
import { ModernExperience } from './sections/ModernExperience';
import { ModernProjects } from './sections/ModernProjects';
import { ModernSkills } from './sections/ModernSkills';
import { ModernAchievements } from './sections/ModernAchievements';
import { ModernContact } from './sections/ModernContact';
import { VenkyAssistant } from './components/assistant/VenkyAssistant';
import { ProjectModal } from './components/project/ProjectModal';
import { projectsData } from './data/projects';
import { Bot, Sparkles, AlertTriangle } from 'lucide-react';

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
    console.error('Uncaught error in Portfolio:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy-950 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-navy-900 border border-red-500/50 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span>SYSTEM RECOVERY // APPLICATION ERROR</span>
            </div>
            <p className="text-xs text-slate-300">
              {this.state.error?.message || 'An unexpected error occurred.'}
            </p>
            <button
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
              className="px-4 py-2 bg-accent-cyan text-navy-950 font-bold text-xs rounded-lg transition-all hover:bg-white"
            >
              Reload Portfolio
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export function AppContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Active section observer on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'achievements', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  const activeProject = projectsData.find(p => p.id === selectedProjectId) || null;

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 selection:bg-accent-cyan selection:text-navy-950 relative font-sans">
      {/* 1. Modern Glassmorphic Navigation Header */}
      <ModernNavbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onToggleAssistant={() => setIsAssistantOpen(!isAssistantOpen)}
      />

      {/* 2. Main Single-Page Sections */}
      <main className="relative">
        <ModernHero
          onExploreProjects={() => scrollToSection('projects')}
          onContactMe={() => scrollToSection('contact')}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />

        <ModernAbout />

        <ModernEducation />

        <ModernExperience />

        <ModernProjects
          onOpenProjectModal={(id) => setSelectedProjectId(id)}
        />

        <ModernSkills />

        <ModernAchievements />

        <ModernContact
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />
      </main>

      {/* 3. Modern Engineering Footer */}
      <ModernFooter onNavigate={scrollToSection} />

      {/* 4. Floating VENKY AI Assistant Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          className={`px-4 py-3 rounded-full border shadow-[0_4px_25px_rgba(0,212,255,0.35)] flex items-center gap-2.5 font-bold text-xs select-none transition-all duration-300 transform hover:scale-105 ${
            isAssistantOpen
              ? 'bg-navy-900 text-white border-accent-cyan'
              : 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white border-white/20'
          }`}
          title="Open VENKY AI Assistant"
        >
          <Bot className="w-4 h-4 text-white" />
          <span>Ask VENKY AI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* 5. Slide-over VENKY AI Drawer */}
      {isAssistantOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[450px] shadow-2xl animate-in slide-in-from-right duration-300">
          <VenkyAssistant
            onNavigateSection={(sec) => {
              scrollToSection(sec);
            }}
            onOpenProjectModal={(pId) => {
              setSelectedProjectId(pId);
            }}
            isFloatingOpen={isAssistantOpen}
            onToggleFloating={() => setIsAssistantOpen(false)}
          />
        </div>
      )}

      {/* 6. Technical Dossier Project Modal */}
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
