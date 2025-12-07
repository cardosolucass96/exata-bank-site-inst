interface DonutChartProps {
  principal: number;
  interest: number;
}

export function DonutChart({ principal, interest }: DonutChartProps) {
  const total = principal + interest;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  
  const principalPercent = principal / total;
  const strokeDashoffset = circumference - (principalPercent * circumference);

  return (
    <div className="relative w-64 h-64 flex items-center justify-center mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="transparent"
          stroke="oklch(0.55 0.22 25)"
          strokeWidth="25"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="transparent"
          stroke="oklch(1 0 0)"
          strokeWidth="25"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
        <span className="text-xs font-bold opacity-80">Total</span>
        <span className="text-lg font-bold">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(total)}
        </span>
      </div>
    </div>
  );
}
