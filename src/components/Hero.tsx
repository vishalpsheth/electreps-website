
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-publicnext-grey to-white -z-10" />
      
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building <span className="gradient-text">Digital Experiences</span> That Transform Businesses
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            ElectReps is a leading technology platform specializing in web and app development, 
            cloud solutions, and high-performance enterprise software.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-publicnext-blue hover:bg-publicnext-darkblue text-white px-8 py-6 text-lg"
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Our Services
            </Button>
            <Button 
              variant="outline" 
              className="border-publicnext-blue text-publicnext-blue hover:bg-publicnext-blue hover:text-white px-8 py-6 text-lg group"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Backed By</p>
            <div className="flex justify-center">
              <div className="px-8 py-3 bg-white shadow-md rounded-lg">
                <img 
                  src="/assets/images/google-logo.png" 
                  alt="Google" 
                  className="h-8"
                  onError={(e) => {
                    // @ts-ignore - currentTarget is valid
                    e.currentTarget.onerror = null;
                    // @ts-ignore - currentTarget is valid
                    e.currentTarget.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
                  }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Winner of 2022 Google News Initiative Innovation Challenge, Asia Pac + funding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
