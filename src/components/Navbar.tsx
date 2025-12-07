import { useState } from 'react';
import { Buildings, Lock, List, X } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onLoginClick: () => void;
}

export function Navbar({ onLoginClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
              <Buildings size={24} weight="bold" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              Exata<span className="text-primary">Bank</span>
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-500 hover:text-primary font-medium text-sm transition"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('simulator')}
              className="text-gray-500 hover:text-primary font-medium text-sm transition"
            >
              Simulador
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-500 hover:text-primary font-medium text-sm transition"
            >
              Sobre o Grupo
            </button>
            
            <Button 
              onClick={onLoginClick}
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-lg transform hover:scale-105 active:scale-95"
            >
              <Lock size={16} weight="bold" />
              <span>Área do Parceiro</span>
            </Button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-gray-600"
            >
              {mobileMenuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
          <button 
            onClick={() => scrollToSection('products')}
            className="block w-full text-left text-gray-600 font-medium py-2"
          >
            Produtos
          </button>
          <button 
            onClick={() => scrollToSection('simulator')}
            className="block w-full text-left text-gray-600 font-medium py-2"
          >
            Simulador
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left text-gray-600 font-medium py-2"
          >
            Sobre o Grupo
          </button>
          <Button 
            onClick={() => { 
              onLoginClick(); 
              setMobileMenuOpen(false); 
            }}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-bold"
          >
            <Lock size={18} weight="bold" /> Área do Parceiro
          </Button>
        </div>
      )}
    </nav>
  );
}
