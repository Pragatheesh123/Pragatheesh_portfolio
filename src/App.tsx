import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PersonalSignals } from './components/PersonalSignals';
import { MarqueeTicker } from './components/MarqueeTicker';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { BeyondDataSection } from './components/BeyondDataSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#E2E2E2] text-[#111111] selection:bg-[#111111] selection:text-[#E2E2E2]">
      {/* Sticky Editorial Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Flow */}
      <main>
        {/* Hero Section with Interactive 3D Data Sculpture */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Horizontal Signals Ribbon */}
        <PersonalSignals />

        {/* Editorial Ticker */}
        <MarqueeTicker />

        {/* 01 // WHO I AM (About) */}
        <About />

        {/* 02 // WHERE I WORKED (Experience Timeline) */}
        <ExperienceTimeline />

        {/* 03 // WHAT I BUILT (Projects Case Studies) */}
        <ProjectsSection />

        {/* Technical Toolkit ("Tools I actually use.") */}
        <SkillsSection />

        {/* Inverted Ticker leading into Achievement */}
        <MarqueeTicker inverted={true} />

        {/* 04 // WHAT I'VE WON (Mediathon Winner ₹30,000) */}
        <AchievementsSection />

        {/* 05 // WHAT I'M LIKE OUTSIDE WORK ("Beyond the Dashboard") */}
        <BeyondDataSection />

        {/* 06 // WHERE I'M GOING (Education & Live Radar) */}
        <EducationSection />

        {/* 07 // LET'S TALK (Contact) */}
        <ContactSection />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* In-Browser Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
