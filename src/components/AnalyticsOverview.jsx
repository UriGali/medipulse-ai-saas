import React from 'react';
import { TrendingUp, Clock, Target } from 'lucide-react';

const AnalyticsOverview = () => {
  const stats = [
    {
      title: 'Total Appointments',
      value: '1,284',
      change: '+12.5%',
      icon: TrendingUp,
      color: 'text-vibrantCyan',
      shadowColor: 'rgba(0,229,255,0.8)',
      chartPath: 'M0 25 Q 15 15, 30 20 T 60 10 T 90 5',
    },
    {
      title: 'AI Accuracy',
      value: '98.2%',
      change: '+0.8%',
      icon: Target,
      color: 'text-green-500',
      shadowColor: 'rgba(34,197,94,0.8)',
      chartPath: 'M0 25 Q 15 20, 30 22 T 60 12 T 90 8',
    },
    {
      title: 'Time Saved',
      value: '342 hrs',
      change: '+24.1%',
      icon: Clock,
      color: 'text-purple-500',
      shadowColor: 'rgba(168,85,247,0.8)',
      chartPath: 'M0 25 Q 15 10, 30 15 T 60 5 T 90 2',
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="glass p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-secondaryText text-sm font-medium mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold text-primaryText tracking-tight">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl bg-white shadow-sm ${stat.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4 text-sm z-10 relative">
              <span className="text-green-500 font-semibold bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
              <span className="text-secondaryText">vs last month</span>
            </div>

            {/* Glowing line chart simulation */}
            <div className="absolute bottom-[-10px] right-[-10px] w-32 h-16 opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none">
              <svg viewBox="0 0 100 30" className="w-full h-full" style={{ filter: `drop-shadow(0 0 6px ${stat.shadowColor})` }}>
                <path 
                  d={stat.chartPath} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  className={stat.color} 
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsOverview;
