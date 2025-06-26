
import React from 'react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  isVisible: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isVisible }) => {
  return (
    <div className={`bg-white border border-neutral-200 minimal-hover transition-all duration-500 ${
      isVisible ? 'animate-scale-in' : 'opacity-0'
    }`}>
      <div className="aspect-square w-full bg-neutral-50 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-light text-neutral-900 mb-2 tracking-wide">
          {product.name}
        </h3>
        
        <p className="text-sm text-neutral-600 mb-4 font-light leading-relaxed">
          {product.description}
        </p>
        
        <ul className="space-y-1 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="text-xs text-neutral-500 flex items-center font-light">
              <div className="w-1 h-1 bg-neutral-400 rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between">
          <div className="text-xl font-light text-neutral-900 tracking-wide">
            {product.price}
          </div>
          
          <Button className="minimal-button bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-2 rounded-none font-light tracking-wide text-sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
