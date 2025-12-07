import { Calculator, TrendUp } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { MarketBarChart } from './MarketBarChart';

export function HeroSection() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary opacity-[0.03] transform -skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
              <TrendUp size={14} weight="bold" /> Exata Grupo
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Crédito rápido, <br/>
              <span className="text-primary">sem complicações.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Soluções financeiras completas para Servidores, Aposentados, CLT e Beneficiários. Tecnologia e confiança que você já conhece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={scrollToSimulator}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Calculator size={20} weight="bold" />
                Simular Agora
              </Button>
              <Button 
                onClick={scrollToProducts}
                variant="outline"
                className="flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-primary hover:text-primary text-gray-700 px-8 py-4 rounded-xl font-bold transition"
              >
                Conhecer Produtos
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition duration-500">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Taxas de Mercado</h3>
                  <p className="text-xs text-gray-400">Comparativo Mensal Estimado</p>
                </div>
                <div className="bg-red-50 p-2 rounded-lg">
                  <TrendUp className="text-primary" size={24} weight="bold" />
                </div>
              </div>
              
              <MarketBarChart />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
