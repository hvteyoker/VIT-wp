
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-light text-neutral-900 tracking-wide">
              VinoInTouch
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('products')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 font-light tracking-wide"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 font-light tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 font-light tracking-wide"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-6 bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
              <button
                onClick={() => scrollToSection('products')}
                className="text-left text-neutral-600 hover:text-neutral-900 transition-colors duration-200 font-light tracking-wide"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-neutral-600 hover:text-neutral-900 transition-colors duration-200 font-light tracking-wide"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-neutral-600 hover:text-neutral-900 transition-colors duration-200 font-light tracking-wide"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
