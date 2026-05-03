import Navbar from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WorkSection } from '@/components/WorkSection';
import { WhyCodostSection } from '@/components/WhyCodostSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">
        <ScrollReveal variant="scale">
          <div id="hero">
            <HeroSection />
          </div>
        </ScrollReveal>
        
        <ScrollReveal variant="scale">
          <ServicesSection />
        </ScrollReveal>

        <WorkSection />

        <ScrollReveal variant="scale">
          <WhyCodostSection />
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <TestimonialsSection />
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal variant="scale">
          <FinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
