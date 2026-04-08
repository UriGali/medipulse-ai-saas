import React from 'react';
import { CheckCheck, Bot, User, Phone, Video, MoreVertical, Send, Paperclip, Smile } from 'lucide-react';

const WhatsAppConsole = () => {
  const messages = [
    { id: 1, sender: 'AI', text: 'Hello Sarah, this is MediPulse AI reminding you of your check-up tomorrow at 10:00 AM. Please reply YES to confirm.', time: '09:00 AM', status: 'read' },
    { id: 2, sender: 'Patient', text: 'YES', time: '09:05 AM', status: '' },
    { id: 3, sender: 'AI', text: 'Thank you! Your appointment is confirmed for tomorrow at 10:00 AM. Dr. Smith is looking forward to seeing you.', time: '09:05 AM', status: 'read' }
  ];

  return (
    <div className="glass rounded-2xl flex flex-col h-[600px] overflow-hidden border border-white/50 shadow-glass">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md p-4 border-b border-secondaryText/10 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-slateBlue flex items-center justify-center overflow-hidden">
              <User className="w-6 h-6 text-secondaryText" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h3 className="font-semibold text-primaryText leading-none">Sarah Jenkins</h3>
            <span className="text-xs text-secondaryText">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-secondaryText">
          <Phone className="w-5 h-5 cursor-pointer hover:text-vibrantCyan transition-colors" />
          <Video className="w-5 h-5 cursor-pointer hover:text-vibrantCyan transition-colors" />
          <MoreVertical className="w-5 h-5 cursor-pointer hover:text-vibrantCyan transition-colors" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slateBlue/50 bg-blend-soft-light flex flex-col gap-4">
        <div className="text-center mb-4">
          <span className="bg-white/80 text-xs font-medium text-secondaryText px-3 py-1 rounded-full shadow-sm">
            Today
          </span>
        </div>

        {messages.map((msg) => {
          const isAI = msg.sender === 'AI';
          return (
            <div key={msg.id} className={`flex max-w-[80%] ${isAI ? 'self-end flex-row-reverse' : 'self-start'} gap-3`}>
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${isAI ? 'bg-gradient-to-tr from-vibrantCyan to-blue-500' : 'bg-gray-200'}`}>
                {isAI ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-gray-500" />}
              </div>
              <div className={`p-4 rounded-2xl relative shadow-sm ${
                isAI 
                  ? 'bg-vibrantCyan text-white rounded-tr-none' 
                  : 'bg-white text-primaryText rounded-tl-none border border-white/60'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <div className={`flex items-center justify-end gap-1 mt-2 text-[10px] ${isAI ? 'text-cyan-100' : 'text-gray-400'}`}>
                  <span>{msg.time}</span>
                  {isAI && msg.status === 'read' && <CheckCheck className="w-3 h-3 text-white" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      <div className="bg-white/80 p-4 border-t border-secondaryText/10 flex items-center gap-3 z-10 hidden md:flex">
        <Smile className="w-6 h-6 text-secondaryText cursor-pointer hover:text-vibrantCyan transition-colors" />
        <Paperclip className="w-6 h-6 text-secondaryText cursor-pointer hover:text-vibrantCyan transition-colors" />
        <div className="flex-1 bg-slateBlue rounded-full px-4 py-2.5 flex items-center shadow-inner">
          <input 
            type="text" 
            placeholder="System is monitoring chat. Type to override AI..." 
            className="bg-transparent border-none outline-none w-full text-sm placeholder-secondaryText/70 text-primaryText"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-vibrantCyan flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform text-white">
          <Send className="w-5 h-5 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default WhatsAppConsole;
