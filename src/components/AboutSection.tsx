import { TrendUp, ShieldCheck, DeviceMobile, Buildings, ArrowRight } from '@phosphor-icons/react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Por que escolher a Exata?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-primary">
                  <TrendUp size={24} weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Agilidade na Liberação</h4>
                  <p className="text-gray-600 leading-relaxed mt-1">Tecnologia de ponta para analisar e liberar seu crédito em tempo recorde.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck size={24} weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Segurança do Grupo Exata</h4>
                  <p className="text-gray-600 leading-relaxed mt-1">Parte de um grupo consolidado no mercado financeiro nacional.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-primary">
                  <DeviceMobile size={24} weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">100% Digital</h4>
                  <p className="text-gray-600 leading-relaxed mt-1">Simule, contrate e acompanhe tudo pelo celular, sem filas de banco.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-gray-900 rounded-[2rem] p-12 text-center text-white relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-gray-900"></div>

              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white mx-auto mb-6 border border-white/20">
                <Buildings size={40} weight="bold" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Exata Grupo</h3>
              <p className="text-gray-400 mb-8">Excelência e solidez em soluções financeiras.</p>
              <a 
                href="https://exatagrupo.com.br/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition group-hover:gap-3"
              >
                Visitar Site Institucional <ArrowRight size={18} weight="bold" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
