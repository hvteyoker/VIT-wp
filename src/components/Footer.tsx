
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-light mb-6 tracking-wide">VinoInTouch</h3>
            <p className="text-neutral-400 mb-8 max-w-md font-light leading-relaxed text-sm">
              Your trusted partner for premium computer peripherals. 
              We specialize in high-quality products from renowned manufacturers 
              to enhance your digital experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-light mb-6 tracking-wide text-neutral-300">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-sm font-light mb-6 tracking-wide text-neutral-300">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  Gaming Mice
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  Keyboards
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm font-light">
                  Mouse Pads
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs font-light">
            © {currentYear} VinoInTouch. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-xs font-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-xs font-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
