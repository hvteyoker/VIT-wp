
import React from 'react';

const About = () => {
  const features = [
    {
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality testing to ensure peak performance and durability."
    },
    {
      title: "Trusted Brands",
      description: "We partner with renowned manufacturers known for their innovation and reliability."
    },
    {
      title: "Expert Curation",
      description: "Our team of tech enthusiasts handpicks each product for optimal gaming and productivity."
    },
    {
      title: "Customer Support",
      description: "Dedicated support team ready to help you find the perfect peripherals for your setup."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-8 tracking-tight animate-on-scroll">
            About VinoInTouch
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed font-light animate-on-scroll">
            We are passionate about delivering premium computer peripherals that enhance your digital experience. 
            Our commitment to quality and innovation drives us to source only the finest products from trusted manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-on-scroll">
              <h3 className="text-lg font-light text-neutral-900 mb-4 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
