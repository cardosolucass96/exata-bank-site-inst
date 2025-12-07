import { Calculator } from '@phosphor-icons/react';
import { DonutChart } from './DonutChart';
import { Simulation, formatCurrency } from '@/lib/products';

interface SimulatorResultsProps {
  simulation: Simulation;
  amount: number;
}

export function SimulatorResults({ simulation, amount }: SimulatorResultsProps) {
  return (
    <div className="lg:col-span-5 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <h4 className="relative z-10 text-center text-gray-400 text-xs uppercase tracking-[0.2em] mb-8 font-bold flex items-center justify-center gap-2">
        <Calculator size={14} weight="bold" /> Resumo da Simulação
      </h4>

      <div className="relative z-10 text-center mb-10">
        <span className="block text-sm text-gray-400 mb-2">Parcela Mensal Estimada</span>
        <span className="text-5xl font-bold text-white tracking-tight">
          {formatCurrency(simulation.pmt)}
        </span>
      </div>

      <div className="relative z-10 mb-8">
        <DonutChart principal={amount} interest={simulation.totalInterest} />
        
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <span className="text-xs text-gray-400">Recebido</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-xs text-gray-400">Juros</span>
          </div>
        </div>
      </div>
      
      <p className="relative z-10 text-center text-[10px] text-gray-500 max-w-xs mx-auto leading-relaxed">
        *Valores aproximados para fins de simulação. A taxa efetiva e o Custo Efetivo Total (CET) podem variar conforme análise de crédito e perfil do cliente.
      </p>
    </div>
  );
}
