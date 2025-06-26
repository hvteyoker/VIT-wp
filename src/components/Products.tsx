
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleProducts(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const productElements = document.querySelectorAll('.product-card');
    productElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      id: 1,
      name: "LOGITECH G102 LIGHTSYNC Mouse",
      price: "2,242 ₽",
      image: "https://ir.ozone.ru/s3/multimedia-1-c/c1000/6951861660.jpg?w=400&h=400&fit=crop&crop=center",
      description: "High-precision gaming mouse with customizable RGB lighting",
      features: [
        "8,000 DPI sensor",
        "RGB LIGHTSYNC technology",
        "6 programmable buttons",
        "Lightweight design"
      ]
    },
    {
      id: 2,
      name: "Epomaker x Aula F75 Black Mechanical Keyboard",
      price: "6,821 ₽",
      image: "https://ae01.alicdn.com/kf/S7a736606a0de49caaf5956d09032775c2.jpg?w=400&h=400&fit=crop&crop=center",
      description: "Premium mechanical keyboard with hot-swappable switches",
      features: [
        "Hot-swappable switches",
        "Gasket mount design",
        "75% compact layout",
        "Premium build quality"
      ]
    },
    {
      id: 3,
      name: "Skypad Mousepad 3.0",
      price: "1,425 ₽",
      image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:320,cw:1920,ch:1080,q:80,w:1920/QHQFFaaqo296oKhb88hmwT.jpeg?w=400&h=400&fit=crop&crop=center",
      description: "Extended mouse pad for enhanced gaming experience",
      features: [
        "XXL size coverage",
        "Anti-slip rubber base",
        "Smooth fabric surface",
        "Durable stitched edges"
      ]
    }
  ];

  return (
    <section id="products" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6 tracking-tight animate-fade-in-up">
            Products
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Carefully curated selection of high-quality computer peripherals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              data-index={index}
            >
              <ProductCard product={product} isVisible={visibleProducts[index]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
