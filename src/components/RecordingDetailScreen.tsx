import { useState } from 'react';
import { ArrowLeft, Play, Pause, Edit2, FolderPlus } from 'lucide-react';
import { mockRecordings } from '../data/mockData';
import { Button } from './ui/button';

interface RecordingDetailScreenProps {
  recordingId: string;
  onBack: () => void;
}

export function RecordingDetailScreen({ recordingId, onBack }: RecordingDetailScreenProps) {
  const recording = mockRecordings.find((r) => r.id === recordingId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  if (!recording) {
    return <div>Recording not found</div>;
  }

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-14 pb-4 border-b border-gray-100">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        
        <h1 className="mb-2">{recording.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{recording.date} · {recording.time}</span>
          <span>·</span>
          <span>{recording.duration}</span>
        </div>
      </div>

      <div className="flex-1 px-6 py-6 pb-24">
        {/* Waveform Player */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 mb-6">
          {/* Large Waveform */}
          <div className="flex gap-1 items-end h-32 mb-6 relative">
            {recording.waveform.map((height, i) => (
              <div
                key={i}
                className="flex-1 rounded-full overflow-hidden"
              >
                <div
                  className={`w-full rounded-full transition-all ${
                    (i / recording.waveform.length) * 100 < progress
                      ? 'bg-gradient-to-t from-blue-500 to-blue-400'
                      : 'bg-gray-200'
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          {/* Play Controls */}
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg transition-all active:scale-95"
            >
              {isPlaying ? (
                <Pause className="w-7 h-7 text-white fill-white" />
              ) : (
                <Play className="w-7 h-7 text-white fill-white ml-0.5" />
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-2">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
            />
          </div>
          
          <div className="flex justify-between text-xs text-gray-500">
            <span>0:00</span>
            <span>{recording.duration}</span>
          </div>
        </div>

        {/* Reflection Section */}
        {recording.reflection && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-gray-900">Reflection</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Edit2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {recording.reflection}
            </p>
          </div>
        )}

        {/* Mood Tag */}
        {recording.mood && (
          <div className="mb-6">
            <h3 className="text-sm text-gray-600 mb-2">Mood</h3>
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full">
              {recording.mood}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full py-6 rounded-xl border-2 flex items-center justify-center gap-2"
          >
            <FolderPlus className="w-5 h-5" />
            Move to collection
          </Button>
        </div>
      </div>
    </div>
  );
}
