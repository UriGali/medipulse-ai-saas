import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import LiveDemo from './components/LiveDemo';

function App() {
  return (
    <div className="min-h-screen bg-slateBlue font-sans text-primaryText selection:bg-medicalBlue selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <HowItWorks />
        <LiveDemo />
      </main>

      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-primaryText">MediPulse AI</span>
            <span className="text-secondaryText">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-secondaryText">
            <a href="#" className="hover:text-medicalBlue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-medicalBlue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-medicalBlue transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
