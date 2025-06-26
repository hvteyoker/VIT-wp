
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight animate-on-scroll">
            Contact
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed animate-on-scroll">
            Have questions about our products or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-neutral-700 mb-2 tracking-wide">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-none border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500 font-light"
                  />
                </div>
                <div>
                  <label className="block text-sm font-light text-neutral-700 mb-2 tracking-wide">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-none border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500 font-light"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-light text-neutral-700 mb-2 tracking-wide">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  required 
                  className="w-full px-4 py-3 rounded-none border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500 font-light"
                />
              </div>
              
              <div>
                <label className="block text-sm font-light text-neutral-700 mb-2 tracking-wide">
                  Subject
                </label>
                <Input 
                  type="text" 
                  required 
                  className="w-full px-4 py-3 rounded-none border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500 font-light"
                />
              </div>
              
              <div>
                <label className="block text-sm font-light text-neutral-700 mb-2 tracking-wide">
                  Message
                </label>
                <Textarea 
                  required 
                  rows={5}
                  className="w-full px-4 py-3 rounded-none border-neutral-300 focus:border-neutral-500 focus:ring-neutral-500 resize-none font-light"
                />
              </div>
              
              <Button 
                type="submit" 
                className="minimal-button w-full bg-neutral-900 hover:bg-neutral-800 text-white font-light py-3 rounded-none tracking-wide"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12 animate-on-scroll">
            <div>
              <h3 className="text-xl font-light text-neutral-900 mb-8 tracking-wide">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-light text-neutral-500 mb-1 tracking-wide">Email</p>
                  <p className="text-neutral-700 font-light">info@vinointouch.com</p>
                </div>
                
                <div>
                  <p className="text-sm font-light text-neutral-500 mb-1 tracking-wide">Phone</p>
                  <p className="text-neutral-700 font-light">+7 (xxx) xxx-xx-xx</p>
                </div>
                
                <div>
                  <p className="text-sm font-light text-neutral-500 mb-1 tracking-wide">Hours</p>
                  <p className="text-neutral-700 font-light">Monday - Friday: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-light text-neutral-900 mb-4 tracking-wide">
                Customer Support
              </h4>
              <p className="text-neutral-600 mb-6 font-light leading-relaxed text-sm">
                Our dedicated support team is ready to assist you with product selection, 
                technical questions, and after-sales support.
              </p>
              <Button 
                variant="outline" 
                className="border border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-light px-6 py-2 rounded-none tracking-wide"
              >
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
