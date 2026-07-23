import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedByCarousel } from './components/TrustedByCarousel';
import { RoasCalculator } from './components/RoasCalculator';
import { ProblemsSection } from './components/ProblemsSection';
import { SolutionSection } from './components/SolutionSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ResultsCounters } from './components/ResultsCounters';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { LeadFormSection } from './components/LeadFormSection';
import { FloatingElements } from './components/FloatingElements';
import { AuditModal } from './components/AuditModal';
import { Footer } from './components/Footer';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  useEffect(() => {
    // Automatically trigger the popup form on page load/reload after a smooth 1-second delay
    const timer = setTimeout(() => {
      setAuditModalOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMakeCall = () => {
    window.location.href = 'tel:+917439469915';
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-['Plus_Jakarta_Sans',sans-serif] relative antialiased selection:bg-[#FFC000] selection:text-black w-full overflow-x-hidden">
      {/* Sticky Header */}
      <Navbar
        onOpenAuditModal={() => setAuditModalOpen(true)}
        onOpenBookingModal={handleMakeCall}
      />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenAuditModal={() => setAuditModalOpen(true)}
          onOpenBookingModal={handleMakeCall}
        />

        {/* Trusted By Carousel */}
        <TrustedByCarousel />



        {/* Problems Section */}
        <ProblemsSection onOpenAuditModal={() => setAuditModalOpen(true)} />









        {/* Dubai Case Studies with Recharts */}
        <CaseStudiesSection onOpenBookingModal={handleMakeCall} />

        {/* Testimonials */}
        <TestimonialsSection />





        {/* FAQ Accordion */}
        <FaqSection />

        {/* Lead Generation Form Section */}
        <LeadFormSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAuditModal={() => setAuditModalOpen(true)}
        onOpenBookingModal={handleMakeCall}
      />

      {/* Floating Elements (WhatsApp, Live Chat Assistant, Sticky Mobile CTA) */}
      <FloatingElements
        onOpenAuditModal={() => setAuditModalOpen(true)}
        onOpenBookingModal={handleMakeCall}
      />

      {/* Audit Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}
