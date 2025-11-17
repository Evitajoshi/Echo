import { User, Bell, Lock, Download, Info } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function ProfileScreen() {
  const [dailyReminder, setDailyReminder] = useState(true);
  const [storeLocation, setStoreLocation] = useState(false);

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-14 pb-6 border-b border-gray-100">
        <h1 className="mb-2">Profile</h1>
      </div>

      <div className="flex-1 px-6 py-6 pb-24 space-y-8">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center">
            <User className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-gray-900 mb-1">Echo user</h2>
            <p className="text-sm text-gray-500">Member since Nov 2025</p>
          </div>
        </div>

        {/* Notifications Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-gray-700" />
            <h3 className="text-gray-900">Notifications</h3>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-900 mb-1">Daily reminder to record an Echo</p>
                <p className="text-sm text-gray-500">Get a gentle nudge each day</p>
              </div>
              <button
                onClick={() => setDailyReminder(!dailyReminder)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  dailyReminder ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                    dailyReminder ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-gray-700" />
            <h3 className="text-gray-900">Privacy</h3>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-900 mb-1">Store location with recordings</p>
                <p className="text-sm text-gray-500">Remember where you captured each moment</p>
              </div>
              <button
                onClick={() => setStoreLocation(!storeLocation)}
                className={`relative w-12 h-7 rounded-full transition-colors ${
                  storeLocation ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                    storeLocation ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Data Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Download className="w-5 h-5 text-gray-700" />
            <h3 className="text-gray-900">Data</h3>
          </div>
          
          <Button
            variant="outline"
            className="w-full py-6 rounded-xl border-2 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Export my Echo data
          </Button>
        </div>

        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-gray-700" />
            <h3 className="text-gray-900">About Echo</h3>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-gray-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              Echo is your personal audio reflection app. Capture the small sounds of your day, 
              build an archive of moments, and rediscover patterns in your life through sound.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
