import { useState } from 'react';
import { ChevronDown, Calendar as CalendarIcon } from 'lucide-react';
import { mockRecordings } from '../data/mockData';
import { RecordingCard } from './RecordingCard';
import { CalendarView } from './CalendarView';

interface ArchiveScreenProps {
  onRecordingClick: (id: string) => void;
}

export function ArchiveScreen({ onRecordingClick }: ArchiveScreenProps) {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const [sortBy, setSortBy] = useState('latest');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filters = [
    'Last 7 days',
    'Last 30 days',
    'This year',
    'Mondays',
    'Mornings',
    'Quick (<30s)',
    'Deep (>2min)',
  ];

  const sortOptions = [
    { id: 'latest', label: 'Latest → Oldest' },
    { id: 'oldest', label: 'Oldest → Latest' },
    { id: 'shortest', label: 'Shortest → Longest' },
    { id: 'longest', label: 'Longest → Shortest' },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 pt-14 pb-4 border-b border-gray-100">
        <h1 className="mb-2">Archive</h1>
        <p className="text-sm text-gray-600">
          A place to revisit and reflect on your sounds.
        </p>

        {/* View Tabs */}
        <div className="flex gap-2 mt-6">
          <button
            onClick={() => setView('list')}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              view === 'list'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            List
          </button>
          <button
            onClick={() => setView('calendar')}
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              view === 'calendar'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Calendar
          </button>
        </div>
      </div>

      {view === 'list' ? (
        <>
          {/* Sort and Filter Controls */}
          <div className="px-6 py-4 border-b border-gray-100">
            {/* Sort Dropdown */}
            <div className="relative mb-4">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm text-gray-700">
                  Sort: {sortOptions.find(o => o.id === sortBy)?.label}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {showSortDropdown && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors ${
                        sortBy === option.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Filter Chips */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter === selectedFilter ? null : filter)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    filter === selectedFilter
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Recordings List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 pb-24">
            {mockRecordings.map((recording) => (
              <RecordingCard
                key={recording.id}
                recording={recording}
                onClick={() => onRecordingClick(recording.id)}
              />
            ))}
          </div>
        </>
      ) : (
        <CalendarView onRecordingClick={onRecordingClick} />
      )}
    </div>
  );
}
