import { ArrowLeft, Play } from 'lucide-react';
import { mockCollections, mockRecordings } from '../data/mockData';

interface CollectionDetailScreenProps {
  collectionId: string;
  onBack: () => void;
  onRecordingClick: (id: string) => void;
}

export function CollectionDetailScreen({ 
  collectionId, 
  onBack, 
  onRecordingClick 
}: CollectionDetailScreenProps) {
  const collection = mockCollections.find((c) => c.id === collectionId);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  const recordings = mockRecordings.filter((r) => 
    collection.recordingIds.includes(r.id)
  );

  return (
    <div className="h-full flex flex-col bg-white overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-14 pb-6 bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        
        <h1 className="mb-3">{collection.title}</h1>
        <p className="text-sm text-gray-600 mb-4">
          {collection.description}
        </p>
        
        {collection.id === 'mondays' && (
          <p className="text-sm text-blue-600 italic">
            "When you listen to your Mondays together, what do they feel like?"
          </p>
        )}
      </div>

      {/* Playlist */}
      <div className="flex-1 px-6 py-6 pb-24">
        {recordings.length > 0 ? (
          <div className="space-y-2">
            {recordings.map((recording, index) => (
              <button
                key={recording.id}
                onClick={() => onRecordingClick(recording.id)}
                className="w-full bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 hover:shadow-md transition-all text-left group"
              >
                <div className="flex items-center gap-4">
                  {/* Index */}
                  <div className="w-8 text-center text-gray-400 group-hover:text-blue-500 transition-colors">
                    {index + 1}
                  </div>

                  {/* Mini Waveform */}
                  <div className="flex gap-0.5 items-end h-10 w-14">
                    {recording.waveform.slice(0, 10).map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-full"
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
                      <span>{recording.date}</span>
                      <span>·</span>
                      <span>{recording.time}</span>
                      <span>·</span>
                      <span>{recording.duration}</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Play className="w-4 h-4 text-blue-500 fill-blue-500 group-hover:text-white group-hover:fill-white ml-0.5 transition-colors" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No recordings in this collection</p>
          </div>
        )}
      </div>
    </div>
  );
}
