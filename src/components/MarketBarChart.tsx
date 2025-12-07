import { Info } from '@phosphor-icons/react';

export function MarketBarChart() {
  const data = [
    { label: 'Bancos', value: 2.5, color: 'bg-gray-200' },
    { label: 'Outros', value: 3.8, color: 'bg-gray-200' },
    { label: 'Exata', value: 1.6, color: 'bg-primary' },
  ];
  const maxVal = 4.0;
  const maxHeightPx = 120;

  return (
    <div className="space-y-6">
      <div className="h-48 w-full flex items-end justify-between gap-4 px-4 pb-2">
        {data.map((item, idx) => (
          <div key={idx} className="h-full flex flex-col items-center justify-end w-1/3 group cursor-default">
            <div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-gray-600">
              {item.value}%
            </div>
            
            <div 
              className={`w-full max-w-[40px] rounded-t-lg transition-all duration-1000 ease-out ${item.color} group-hover:opacity-80 shadow-sm`}
              style={{ height: `${(item.value / maxVal) * maxHeightPx}px` }}
            ></div>
            
            <span className="mt-3 text-xs text-gray-500 font-bold text-center tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
      
      <div className="pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500">
        <Info size={16} className="text-primary" />
        <span>A Exata busca as melhores condições.</span>
      </div>
    </div>
  );
}
