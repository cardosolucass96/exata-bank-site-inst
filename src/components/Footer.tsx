import { Buildings, Lock, CaretRight } from '@phosphor-icons/react';

interface FooterProps {
  onLoginClick: () => void;
}

export function Footer({ onLoginClick }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 mt-auto border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="flex items-center gap-2 font-bold text-2xl tracking-tight text-white mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Buildings size={16} weight="bold" />
              </div>
              Exata<span className="text-primary">Bank</span>
            </span>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Facilitamos o acesso ao crédito com transparência e ética. Somos correspondentes bancários das maiores instituições do país, seguindo rigorosamente as normas do Banco Central.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Produtos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition flex items-center gap-2"><CaretRight size={14} weight="bold"/> Consignado INSS</a></li>
              <li><a href="#" className="hover:text-accent transition flex items-center gap-2"><CaretRight size={14} weight="bold"/> Servidores Públicos</a></li>
              <li><a href="#" className="hover:text-accent transition flex items-center gap-2"><CaretRight size={14} weight="bold"/> Cartão de Crédito</a></li>
              <li><a href="#" className="hover:text-accent transition flex items-center gap-2"><CaretRight size={14} weight="bold"/> Auxílio Brasil</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Ajuda</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-accent transition">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-accent transition">Dúvidas Frequentes</a></li>
              <li><a href="#" className="hover:text-accent transition">Política de Privacidade</a></li>
              <li className="pt-2">
                <button 
                  onClick={onLoginClick} 
                  className="text-accent font-bold hover:text-red-400 transition flex items-center gap-2"
                >
                  <Lock size={16} weight="bold" /> Acesso Parceiro
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2024 Exata Bank. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-2">
            <Lock size={12} weight="bold" /> Desenvolvido com tecnologia segura.
          </p>
        </div>
      </div>
    </footer>
  );
}
