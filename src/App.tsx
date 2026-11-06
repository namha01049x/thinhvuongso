import React, { useState } from 'react';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EcosystemSection } from './components/EcosystemSection';
import { RoadmapSection } from './components/RoadmapSection';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { ProgramsSection } from './components/ProgramsSection';
import { AcademyAndMethodSection } from './components/AcademyAndMethodSection';
import { MentorAndProofSection } from './components/MentorAndProofSection';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import {
  ProgramDetailModal,
  StudentPortalModal,
} from './components/ProgramDetailModal';
import { PROGRAMS_DATA, ProgramItem } from './data/dtvData';

export function App() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [portalModalOpen, setPortalModalOpen] = useState(false);

  const handleOpenProgramModal = (programId: string) => {
    const found = PROGRAMS_DATA.find((p) => p.id === programId);
    if (found) {
      setSelectedProgram(found);
    }
  };

  return (
    <div className="min-h-screen bg-abyssal text-kem flex flex-col selection:bg-cam selection:text-abyssal">
      {/* Top Announcement Bar */}
      <TopAnnouncementBar onOpenProgramModal={handleOpenProgramModal} />

      {/* Sticky Navigation Header */}
      <Header onOpenPortalModal={() => setPortalModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section + 6 Quick-Action Shortcuts + Stats + Ticker */}
        <HeroSection onOpenProgramModal={handleOpenProgramModal} />

        {/* 2. Ecosystem Overview: 4 Pillars + Interactive 8-Node Orbit + 4 Role Lenses */}
        <EcosystemSection onOpenProgramModal={handleOpenProgramModal} />

        {/* 3. Learning Journey Roadmap: 5 Tiers with Curved SVG Path */}
        <RoadmapSection onOpenProgramModal={handleOpenProgramModal} />

        {/* 4. Interactive 3-Question Diagnostic Quiz + Zalo Result Capture */}
        <DiagnosticQuiz onOpenProgramModal={handleOpenProgramModal} />

        {/* 5. Training Programs & Services Catalog (3 Flagships + 8 Filterable Programs) */}
        <ProgramsSection onOpenProgramModal={handleOpenProgramModal} />

        {/* 6. Practical Academy (4 Phone Screens) & 4-Step Methodology (Chị Lan Case Study) */}
        <AcademyAndMethodSection onOpenPortalModal={() => setPortalModalOpen(true)} />

        {/* 7. Mentor Profile (Trần Nam Hà) + Community Life Marquee + LIVE + Chuyên san */}
        <MentorAndProofSection />

        {/* 8. 1-1 Consultation & Lead Capture Form + Free Tích sản Handbook */}
        <ConsultationForm />
      </main>

      {/* 9. Complete Footer */}
      <Footer
        onOpenProgramModal={handleOpenProgramModal}
        onOpenPortalModal={() => setPortalModalOpen(true)}
      />

      {/* Floating Scroll Progress, Zalo CTA & Back to Top */}
      <FloatingActions />

      {/* Interactive Modals */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
      <StudentPortalModal
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
      />
    </div>
  );
}

export default App;
