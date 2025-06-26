
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-neutral-900 mb-8 tracking-tight animate-fade-in-up">
            VinoInTouch
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            A store specializing in high-quality computer peripherals from trusted manufacturers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up [animation-delay:400ms]">
            <Button
              onClick={scrollToProducts}
              className="minimal-button bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-none font-light tracking-wide border-0"
            >
              View Products
            </Button>
            
            <Button
              variant="outline"
              className="border border-neutral-300 text-neutral-700 hover:bg-neutral-50 px-8 py-3 rounded-none font-light tracking-wide"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-12 bg-neutral-300 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
