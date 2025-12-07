import { useState } from 'react';
import { X, Lock, User, ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Login simulado com sucesso!');
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleBackdropClick}>
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full relative z-10 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition"
        >
          <X size={20} weight="bold" />
        </button>
        
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
            <Lock size={28} weight="bold" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Área do Parceiro</h3>
          <p className="text-gray-500 text-sm mt-1">Acesse sua conta para gerenciar propostas.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label className="block text-gray-700 text-xs font-bold uppercase mb-2">Usuário</Label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-gray-400" size={18} weight="bold" />
                <Input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-200 outline-none transition font-medium" 
                  placeholder="CPF ou Email" 
                />
              </div>
            </div>
            <div>
              <Label className="block text-gray-700 text-xs font-bold uppercase mb-2">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} weight="bold" />
                <Input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-red-200 outline-none transition font-medium" 
                  placeholder="••••••••" 
                />
              </div>
            </div>
            <Button 
              type="submit"
              className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition shadow-lg flex justify-center items-center gap-2 mt-2"
            >
              <span>Entrar</span>
              <ArrowRight size={18} weight="bold" />
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Esqueci minha senha</a>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              Não é parceiro? <a href="#" className="text-primary font-bold hover:underline">Cadastre-se</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
