import { Play } from 'lucide-react';
import type { Recording } from '../data/mockData';

interface RecordingCardProps {
  recording: Recording;
  onClick: () => void;
}

export function RecordingCard({ recording, onClick }: RecordingCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all text-left"
    >
      <div className="flex items-center gap-4">
        {/* Waveform Thumbnail */}
        <div className="flex gap-0.5 items-end h-12 w-16">
          {recording.waveform.slice(0, 12).map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-full"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        {/* Recording Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 truncate mb-1">
            {recording.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{recording.date} · {recording.time}</span>
            <span>·</span>
            <span>{recording.duration}</span>
          </div>
          {recording.mood && (
            <div className="mt-2">
              <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                {recording.mood}
              </span>
            </div>
          )}
        </div>

        {/* Play Button */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <Play className="w-4 h-4 text-blue-500 fill-blue-500 ml-0.5" />
          </div>
        </div>
      </div>
    </button>
  );
}
