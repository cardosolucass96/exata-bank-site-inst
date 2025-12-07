import { User, Buildings, CreditCard, Briefcase, HandHeart, Wallet, Calculator, TrendUp, ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Product, Simulation, formatCurrency } from '@/lib/products';

interface SimulatorControlsProps {
  productData: Product;
  amount: number;
  months: number;
  onAmountChange: (value: number) => void;
  onMonthsChange: (value: number) => void;
  simulation: Simulation;
  onLoginClick: () => void;
}

const productIcons: Record<string, React.ReactElement> = {
  inss: <User className="w-16 h-16" weight="bold" />,
  servidor: <Buildings className="w-16 h-16" weight="bold" />,
  cartao: <CreditCard className="w-16 h-16" weight="bold" />,
  clt: <Briefcase className="w-16 h-16" weight="bold" />,
  auxilio: <HandHeart className="w-16 h-16" weight="bold" />,
};

export function SimulatorControls({
  productData,
  amount,
  months,
  onAmountChange,
  onMonthsChange,
  simulation,
  onLoginClick
}: SimulatorControlsProps) {
  return (
    <div className="lg:col-span-7 p-8 md:p-12 relative z-10">
      <div className="flex items-center gap-5 mb-8">
        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary shadow-sm">
          {productIcons[productData.id]}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{productData.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{productData.desc}</p>
        </div>
      </div>

      <div className="h-px bg-gray-100 w-full mb-8"></div>

      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <label className="font-bold text-gray-700 flex items-center gap-2">
            <Wallet className="text-gray-400" size={20} weight="bold" /> Valor do Empréstimo
          </label>
          <span className="font-bold text-primary text-2xl tracking-tight">
            {formatCurrency(amount)}
          </span>
        </div>
        <input 
          type="range" 
          min={productData.minVal} 
          max={productData.maxVal} 
          step={100}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:accent-accent transition-all"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
          <span>{formatCurrency(productData.minVal)}</span>
          <span>{formatCurrency(productData.maxVal)}</span>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <label className="font-bold text-gray-700 flex items-center gap-2">
            <Calculator className="text-gray-400" size={20} weight="bold" /> Prazo (Meses)
          </label>
          <span className="font-bold text-primary text-2xl tracking-tight">
            {months}x
          </span>
        </div>
        <input 
          type="range" 
          min={6} 
          max={productData.maxTerm} 
          step={6}
          value={months}
          onChange={(e) => onMonthsChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:accent-accent transition-all"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
          <span>6x</span>
          <span>{productData.maxTerm}x</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg shadow-sm text-primary">
            <TrendUp size={18} weight="bold" />
          </div>
          <div>
            <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider">Taxa Mensal</span>
            <span className="text-lg font-bold text-gray-900">{simulation.rateDisplay}% a.m.</span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg shadow-sm text-primary">
            <ArrowRight size={18} weight="bold" />
          </div>
          <div>
            <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-wider">Primeira Parcela</span>
            <span className="text-lg font-bold text-gray-900">Até 45 dias</span>
          </div>
        </div>
      </div>

      <Button 
        onClick={onLoginClick}
        className="w-full bg-primary hover:bg-accent text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 flex justify-center items-center gap-3 group"
      >
        <span>Solicitar Agora</span>
        <ArrowRight className="group-hover:translate-x-1 transition-transform" weight="bold" />
      </Button>
    </div>
  );
}
