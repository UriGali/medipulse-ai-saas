import React from 'react';
import { Activity } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-medicalBlue to-blue-400 flex items-center justify-center shadow-lg shadow-medicalBlue/30">
            <Activity className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-primaryText tracking-tight">MediPulse <span className="font-light">AI</span></h1>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-secondaryText">
          <a href="#how-it-works" className="hover:text-medicalBlue transition-colors">How it Works</a>
          <a href="#live-demo" className="hover:text-medicalBlue transition-colors">Live Demo</a>
          <a href="#pricing" className="hover:text-medicalBlue transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-medicalBlue font-semibold hover:text-blue-700 transition-colors">Log In</button>
          <button className="bg-medicalBlue hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg shadow-medicalBlue/30 transition-all transform hover:scale-105">
            Get a Free Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
