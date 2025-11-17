import { useState } from 'react';
import { Button } from './ui/button';

interface SaveRecordingScreenProps {
  duration: number;
  onSave: () => void;
  onDiscard: () => void;
}

export function SaveRecordingScreen({ duration, onSave, onDiscard }: SaveRecordingScreenProps) {
  const [title, setTitle] = useState('Evening walk · Today');
  const [reflection, setReflection] = useState('');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = ['Calm', 'Busy', 'Social', 'Quiet'];

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      <div className="px-6 pt-14 pb-6">
        <h1 className="mb-8">Save your Echo</h1>

        {/* Waveform Display */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 mb-6">
          <div className="flex gap-0.5 items-end h-16 mb-3">
            {Array(50).fill(0).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-full"
                style={{ height: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">
            {formatDuration(duration)}
          </p>
        </div>

        {/* Title Input */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Reflection Input */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">Reflection / Notes</label>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="What does this moment mean to you?"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] resize-none"
          />
        </div>

        {/* Mood Chips */}
        <div className="mb-8">
          <label className="block text-sm text-gray-600 mb-3">Mood</label>
          <div className="flex flex-wrap gap-2">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood === selectedMood ? null : mood)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  mood === selectedMood
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pb-6">
          <Button
            onClick={onSave}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 rounded-xl"
          >
            Save to Archive
          </Button>
          <button
            onClick={onDiscard}
            className="w-full text-gray-600 hover:text-gray-800 py-3"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
