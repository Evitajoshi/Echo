import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mockRecordings } from '../data/mockData';
import { RecordingCard } from './RecordingCard';

interface CalendarViewProps {
  onRecordingClick: (id: string) => void;
}

export function CalendarView({ onRecordingClick }: CalendarViewProps) {
  const [selectedDate, setSelectedDate] = useState(17);
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Generate calendar days for November 2025 (starts on Saturday)
  const calendarDays = Array(30).fill(0).map((_, i) => i + 1);
  const startDayOffset = 6; // November 1, 2025 is a Saturday (6)
  const emptyDays = Array(startDayOffset).fill(null);
  
  // Days with recordings (mock data)
  const daysWithRecordings = [13, 14, 15, 16, 17];
  
  // Filter recordings for selected date
  const recordingsForDate = mockRecordings.filter((_, index) => {
    // Simple mock: show different recordings for different dates
    if (selectedDate === 17) return index < 2;
    if (selectedDate === 16) return index >= 2 && index < 4;
    if (selectedDate === 15) return index === 4;
    if (selectedDate === 14) return index >= 5 && index < 7;
    if (selectedDate === 13) return index === 7;
    return false;
  });

  return (
    <div className="flex-1 overflow-y-auto pb-24">
      {/* Calendar Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-gray-900">November 2025</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Day Headers */}
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-xs text-gray-500 pb-2">
              {day}
            </div>
          ))}
          
          {/* Empty Days */}
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          
          {/* Calendar Days */}
          {calendarDays.map((day) => {
            const hasRecording = daysWithRecordings.includes(day);
            const isSelected = day === selectedDate;
            const isToday = day === 17;
            
            return (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`aspect-square rounded-lg flex flex-col items-center justify-center relative transition-all ${
                  isSelected
                    ? 'bg-blue-500 text-white'
                    : isToday
                    ? 'bg-blue-50 text-blue-600'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="text-sm">{day}</span>
                {hasRecording && (
                  <div className={`absolute bottom-1 w-1 h-1 rounded-full ${
                    isSelected ? 'bg-white' : 'bg-blue-500'
                  }`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Recordings for Selected Date */}
      <div className="px-6 py-4">
        <h3 className="text-gray-900 mb-4">
          {recordingsForDate.length > 0
            ? `November ${selectedDate} · ${recordingsForDate.length} recording${recordingsForDate.length > 1 ? 's' : ''}`
            : `November ${selectedDate} · No recordings`
          }
        </h3>
        
        {recordingsForDate.length > 0 ? (
          <div className="space-y-3">
            {recordingsForDate.map((recording) => (
              <RecordingCard
                key={recording.id}
                recording={recording}
                onClick={() => onRecordingClick(recording.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No recordings on this day</p>
          </div>
        )}
      </div>
    </div>
  );
}
