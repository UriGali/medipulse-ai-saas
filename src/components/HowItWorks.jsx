import React from 'react';
import { MessageSquare, RefreshCcw, CalendarCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'AI Interaction',
      description: 'Our smart bot naturally talks to your patients via WhatsApp, handling inquiries and bookings.',
      color: 'text-medicalBlue',
      bg: 'bg-blue-50'
    },
    {
      icon: RefreshCcw,
      title: 'Instant Sync',
      description: 'Confirmed appointments instantly appear in your clinic\'s calendar without manual data entry.',
      color: 'text-vibrantCyan',
      bg: 'bg-cyan-50'
    },
    {
      icon: CalendarCheck,
      title: 'Zero No-Shows',
      description: 'Automatic reminders are sent 24 hours before, allowing patients to confirm or reschedule seamlessly.',
      color: 'text-green-500',
      bg: 'bg-green-50'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-primaryText tracking-tight mb-4">How MediPulse AI Works</h2>
          <p className="text-lg text-secondaryText font-medium">A seamless experience for your patients, zero admin work for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group bg-slateBlue/10 hover:bg-white">
                <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex flex-shrink-0 items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primaryText mb-4">{step.title}</h3>
                <p className="text-secondaryText text-lg leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
