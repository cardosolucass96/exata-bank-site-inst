import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SimulatorSection } from '@/components/SimulatorSection';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { LoginModal } from '@/components/LoginModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <HeroSection />
      <SimulatorSection onLoginClick={() => setIsLoginOpen(true)} />
      <AboutSection />
      <Footer onLoginClick={() => setIsLoginOpen(true)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <Toaster />
    </div>
  );
}

export default App