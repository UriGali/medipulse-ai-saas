import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[90vh]">
      <div className="flex-1 space-y-8 text-center lg:text-left z-10 w-full">
        <div className="inline-block bg-blue-50 border border-blue-100 text-medicalBlue px-4 py-1.5 rounded-full text-sm font-semibold mb-2 shadow-sm">
          MediPulse AI 2.0 is Here 🚀
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-primaryText leading-tight tracking-tight">
          Your Medical Receptionist, <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-medicalBlue to-vibrantCyan">Powered by AI</span>
        </h1>
        <p className="text-xl text-secondaryText font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Automate appointments, reminders, and patient follow-ups via WhatsApp 24/7. Focus on care, let AI handle the scheduling.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
          <button className="w-full sm:w-auto bg-medicalBlue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-medicalBlue/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
            Get a Free Demo <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primaryText border-2 border-gray-200 font-bold py-4 px-8 rounded-full transition-all transform hover:-translate-y-1 text-lg">
            View Pricing
          </button>
        </div>
        
        <div className="pt-8 flex items-center gap-4 justify-center lg:justify-start text-sm text-secondaryText font-medium">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i + 6}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            ))}
          </div>
          <p>Trusted by <span className="text-primaryText font-bold">500+</span> clinics</p>
        </div>
      </div>
      
      <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-medicalBlue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
          <img src="/hero-doctor.png" alt="Friendly Doctor" className="w-full h-auto object-cover object-center aspect-[4/5] lg:aspect-square" />
        </div>
        {/* Floating badge */}
        <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 text-2xl font-bold">✓</span>
          </div>
          <div>
            <p className="text-sm text-secondaryText font-medium">Next Appointment</p>
            <p className="text-lg text-primaryText font-bold">Today at 10:00 AM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
