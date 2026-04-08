import React, { useState, useEffect } from 'react';
import { Bot, User, CheckCheck, Clock } from 'lucide-react';

const PhoneMockup = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Patient', text: 'Hi, I need to see Dr. Adams this week.', time: '10:01 AM', status: 'read' }
  ]);

  useEffect(() => {
    const sequence = [
      { delay: 1500, msg: { id: 2, sender: 'AI', text: "Hello! I'm the digital assistant for Dr. Adams. She has available slots on Thursday at 2:00 PM or Friday at 10:00 AM. Which works better for you?", time: '10:01 AM', status: 'read' } },
      { delay: 4000, msg: { id: 3, sender: 'Patient', text: 'Thursday at 2pm please.', time: '10:02 AM', status: 'read' } },
      { delay: 5500, msg: { id: 4, sender: 'AI', text: "Perfect. Your appointment is confirmed for Thursday at 2:00 PM. I've added it to the doctor's calendar. See you then!", time: '10:02 AM', status: 'read' } }
    ];

    let totalDelay = 0;
    sequence.forEach((item) => {
      totalDelay += item.delay;
      setTimeout(() => {
        setMessages(prev => [...prev, item.msg]);
      }, totalDelay);
    });
  }, []);

  return (
    <div className="relative w-[320px] h-[650px] bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[12px] border-darkTeal overflow-hidden z-10 flex flex-col mx-auto flex-shrink-0">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-darkTeal rounded-b-3xl w-40 mx-auto z-20"></div>

      {/* Header */}
      <div className="bg-[#075e54] text-white pt-10 pb-3 px-4 flex items-center gap-3 z-10 shadow-md">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center p-2">
          <Bot className="w-full h-full text-white" />
        </div>
        <div>
          <h4 className="font-bold text-sm leading-tight">Clinic Assistant AI</h4>
          <span className="text-xs text-white/80">Online</span>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 bg-[#e5ddd5] p-4 overflow-y-auto flex flex-col gap-3 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] pointer-events-none"></div>
        <div className="text-center my-2 z-10">
          <span className="bg-[#d4eaf7] text-gray-600 text-xs py-1 px-3 rounded-xl shadow-sm">Today</span>
        </div>
        
        {messages.map((msg) => {
          const isAI = msg.sender === 'AI';
          return (
            <div key={msg.id} className={`max-w-[85%] rounded-2xl p-3 shadow-sm z-10 relative text-sm ${
              isAI 
                ? 'bg-white self-start rounded-tl-none border border-gray-100' 
                : 'bg-[#dcf8c6] self-end rounded-tr-none border border-[#c6e5b3]'
            }`}>
              <p className="text-gray-800 leading-relaxed mb-1">{msg.text}</p>
              <div className="flex justify-end items-center gap-1">
                <span className="text-[10px] text-gray-500">{msg.time}</span>
                {!isAI && <CheckCheck className="w-3 h-3 text-blue-500" />}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Input Fake */}
      <div className="bg-[#f0f0f0] p-2 flex items-center gap-2 z-10 border-t border-gray-300">
        <div className="bg-white rounded-full flex-1 h-10 px-4 flex items-center shadow-sm">
          <span className="text-gray-400 text-sm">Type a message...</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#128c7e] flex items-center justify-center text-white shadow-sm flex-shrink-0">
          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
        </div>
      </div>
    </div>
  );
};

const DashboardSnippet = () => {
  const [minutesSaved, setMinutesSaved] = useState(14820); // starts at 247 hours

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutesSaved(prev => prev + 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(minutesSaved / 60);
  const minutes = minutesSaved % 60;

  return (
    <div className="glass rounded-3xl p-8 shadow-2xl relative overflow-hidden bg-white/60 border border-white max-w-md w-full">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-medicalBlue/5 to-vibrantCyan/10 animate-[spin_10s_linear_infinite] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full justify-center">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-medicalBlue text-white flex items-center justify-center shadow-lg shadow-medicalBlue/30">
            <Clock className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-xl">Admin Time Saved</h3>
            <p className="text-secondaryText font-medium">Real-time across all clinics</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 group hover:shadow-md transition-shadow">
          <p className="text-sm font-semibold text-medicalBlue mb-2 uppercase tracking-wider">Total Time Reclaimed</p>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-extrabold text-primaryText tracking-tighter tabular-nums transition-all duration-300">
              {hours}
            </span>
            <span className="text-2xl font-bold text-secondaryText">hrs</span>
            <span className="text-4xl font-extrabold text-primaryText tracking-tighter tabular-nums transition-all duration-300 ml-2">
              {minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-xl font-bold text-secondaryText">min</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-green-600 font-bold bg-green-50 px-3 py-1.5 rounded-lg w-max">
            <CheckCheck className="w-4 h-4" /> Increasing dynamically
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm font-medium">
          That's equivalent to <strong>{Math.floor(hours / 40)} weeks</strong> of full-time human labor.
        </p>
      </div>
    </div>
  );
};

const LiveDemo = () => {
  return (
    <section id="live-demo" className="py-24 bg-slateBlue/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-primaryText tracking-tight mb-4">See It In Action</h2>
          <p className="text-lg text-secondaryText font-medium">Watch how effortless it is for patients, and the massive time it saves you.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 pl-2 pr-2">
          {/* Left Side: Phone */}
          <div className="flex-1 flex justify-end w-full">
            <PhoneMockup />
          </div>

          {/* Right Side: Dashboard snippet */}
          <div className="flex-1 flex justify-start w-full">
            <DashboardSnippet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
