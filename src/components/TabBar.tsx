import { Mic, List, Sparkles, User } from 'lucide-react';

interface TabBarProps {
  activeTab: 'home' | 'archive' | 'collections' | 'profile';
  onTabChange: (tab: 'home' | 'archive' | 'collections' | 'profile') => void;
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: Mic },
    { id: 'archive' as const, label: 'Archive', icon: List },
    { id: 'collections' as const, label: 'Collections', icon: Sparkles },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center gap-1 py-2 px-4 transition-colors"
            >
              <Icon 
                className={`w-6 h-6 ${isActive ? 'text-blue-500' : 'text-gray-400'}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
