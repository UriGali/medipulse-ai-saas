import React from 'react';
import { LayoutDashboard, Users, FileText, Settings, Activity } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Users, label: 'Patients', active: false },
    { icon: FileText, label: 'Automation Logs', active: false },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 glass flex flex-col p-6 z-10 border-r border-white/40">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-vibrantCyan to-blue-500 flex items-center justify-center shadow-lg shadow-vibrantCyan/30">
          <Activity className="text-white w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-primaryText tracking-tight">MediPulse <span className="font-light">AI</span></h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                item.active 
                  ? 'bg-white shadow-sm text-vibrantCyan border border-white/50' 
                  : 'text-secondaryText hover:bg-white/50 hover:text-primaryText'
              }`}
            >
              <Icon className={`w-5 h-5 ${item.active ? 'text-vibrantCyan' : ''}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-secondaryText/10">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium text-secondaryText hover:bg-white/50 hover:text-primaryText">
          <Settings className="w-5 h-5" />
          Settings
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
