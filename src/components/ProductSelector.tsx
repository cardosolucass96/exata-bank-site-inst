import { User, Buildings, CreditCard, Briefcase, HandHeart } from '@phosphor-icons/react';
import { Product } from '@/lib/products';
import { ReactElement } from 'react';

interface ProductSelectorProps {
  products: Record<string, Product>;
  activeProduct: string;
  onProductChange: (productId: string) => void;
}

const productIcons: Record<string, ReactElement> = {
  inss: <User className="w-8 h-8" weight="bold" />,
  servidor: <Buildings className="w-8 h-8" weight="bold" />,
  cartao: <CreditCard className="w-8 h-8" weight="bold" />,
  clt: <Briefcase className="w-8 h-8" weight="bold" />,
  auxilio: <HandHeart className="w-8 h-8" weight="bold" />,
};

export function ProductSelector({ products, activeProduct, onProductChange }: ProductSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
      {Object.values(products).map((prod) => (
        <button
          key={prod.id}
          onClick={() => onProductChange(prod.id)}
          className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 group ${
            activeProduct === prod.id 
              ? 'bg-white shadow-lg border-2 border-primary transform -translate-y-1' 
              : 'bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200'
          }`}
        >
          <div className={`mb-4 transition-transform duration-300 group-hover:scale-110 ${
            activeProduct === prod.id ? 'text-primary' : 'text-gray-600 group-hover:text-accent'
          }`}>
            {productIcons[prod.id]}
          </div>
          <h3 className={`font-bold text-sm text-center ${
            activeProduct === prod.id ? 'text-gray-900' : 'text-gray-600'
          }`}>
            {prod.title}
          </h3>
        </button>
      ))}
    </div>
  );
}
