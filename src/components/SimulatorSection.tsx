import { useState, useEffect, useMemo } from 'react';
import { ProductSelector } from './ProductSelector';
import { SimulatorControls } from './SimulatorControls';
import { SimulatorResults } from './SimulatorResults';
import { PRODUCTS, calculateLoan } from '@/lib/products';

interface SimulatorSectionProps {
  onLoginClick: () => void;
}

export function SimulatorSection({ onLoginClick }: SimulatorSectionProps) {
  const [activeProduct, setActiveProduct] = useState('inss');
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(24);

  const productData = PRODUCTS[activeProduct];

  useEffect(() => {
    setAmount((prev) => {
      if (prev < productData.minVal) return productData.minVal;
      if (prev > productData.maxVal) return productData.maxVal;
      return prev;
    });
    setMonths((prev) => {
      if (prev > productData.maxTerm) return productData.maxTerm;
      return prev;
    });
  }, [activeProduct, productData]);

  const simulation = useMemo(() => {
    return calculateLoan(amount, months, productData.rate);
  }, [amount, months, productData]);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Produtos</h2>
          <p className="mt-4 text-gray-600">Selecione uma modalidade abaixo para ver detalhes e simular as condições exclusivas.</p>
        </div>

        <ProductSelector 
          products={PRODUCTS}
          activeProduct={activeProduct}
          onProductChange={setActiveProduct}
        />

        <div id="simulator" className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 relative">
          <div className="grid lg:grid-cols-12 gap-0">
            
            <SimulatorControls
              productData={productData}
              amount={amount}
              months={months}
              onAmountChange={setAmount}
              onMonthsChange={setMonths}
              simulation={simulation}
              onLoginClick={onLoginClick}
            />

            <SimulatorResults
              simulation={simulation}
              amount={amount}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
