
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import WorkDoneSection from '@/components/WorkDoneSection';
import MediaFeatures from '@/components/MediaFeatures';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <MediaFeatures />
      <TeamSection />
      <ServicesSection />
      <WorkDoneSection />
      <Footer />
    </div>
  );
};

export default Index;
