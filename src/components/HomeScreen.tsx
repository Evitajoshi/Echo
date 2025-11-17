import { useState, useEffect } from 'react';
import { Mic, Settings, Play, Square } from 'lucide-react';

interface HomeScreenProps {
  onStartRecording: () => void;
  onStopRecording: (duration: number) => void;
  isRecording?: boolean;
}

export function HomeScreen({ onStartRecording, onStopRecording, isRecording = false }: HomeScreenProps) {
  const [recordingTime, setRecordingTime] = useState(0);
  const [waveformBars, setWaveformBars] = useState<number[]>(Array(20).fill(20));

  useEffect(() => {
    if (isRecording) {
      const timer = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);

      const waveformInterval = setInterval(() => {
        setWaveformBars(Array(20).fill(0).map(() => Math.random() * 60 + 20));
      }, 100);

      return () => {
        clearInterval(timer);
        clearInterval(waveformInterval);
      };
    } else {
      setRecordingTime(0);
    }
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-14 pb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="text-gray-900">Echo</span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {!isRecording ? (
          <>
            <p className="text-center text-gray-600 mb-12 max-w-xs">
              Capture a moment from your day
            </p>

            <button
              onClick={onStartRecording}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all active:scale-95"
            >
              <Mic className="w-12 h-12 text-white" strokeWidth={2} />
            </button>

            <p className="mt-6 text-sm text-gray-500 text-center">
              Tap to record · Hold to keep recording
            </p>
          </>
        ) : (
          <>
            <div className="text-3xl mb-8 text-gray-900">
              {formatTime(recordingTime)}
            </div>

            <div className="flex gap-1 items-end mb-12 h-24">
              {waveformBars.map((height, i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-blue-500 to-blue-400 rounded-full transition-all duration-100"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>

            <button
              onClick={() => onStopRecording(recordingTime)}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all active:scale-95"
            >
              <Square className="w-12 h-12 text-white fill-white" />
            </button>

            <p className="mt-6 text-sm text-gray-500">
              Recording…
            </p>
          </>
        )}
      </div>

      {/* Yesterday's Echo Card */}
      {!isRecording && (
        <div className="px-6 pb-24">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">Yesterday's Echo</h3>
                <p className="text-sm text-gray-500">Listen to your last recording</p>
              </div>
              <button className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors">
                <Play className="w-5 h-5 text-blue-500 fill-blue-500 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
