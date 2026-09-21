import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonalSignals } from './components/PersonalSignals';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { BeyondDataSection } from './components/BeyondDataSection';
import { CurrentlySection } from './components/CurrentlySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 2. Personal Signals Strip */}
        <PersonalSignals />

        {/* 3. Conversational About Section */}
        <About />

        {/* 4. Work & Internship Timeline */}
        <ExperienceTimeline />

        {/* 5. Selected Project Case Studies */}
        <ProjectsSection />

        {/* 6. Technical Toolkit */}
        <SkillsSection />

        {/* 7. Distinctive Hackathon Award Section */}
        <AchievementsSection />

        {/* 8. Compact Education Section */}
        <EducationSection />

        {/* 9. Beyond the Dashboard (Football, Chess, Valorant, Cooking) */}
        <BeyondDataSection />

        {/* 10. Live "Currently" Radar */}
        <CurrentlySection />

        {/* 11. Direct Contact & Collaboration */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
