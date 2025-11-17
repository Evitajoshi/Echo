import { mockCollections } from '../data/mockData';
import { Sparkles } from 'lucide-react';

interface CollectionsScreenProps {
  onCollectionClick: (id: string) => void;
}

export function CollectionsScreen({ onCollectionClick }: CollectionsScreenProps) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="px-6 pt-14 pb-6 border-b border-gray-100">
        <h1 className="mb-2">Collections</h1>
        <p className="text-sm text-gray-600">
          Echo groups your sounds into meaningful playlists.
        </p>
      </div>

      {/* Collections List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 pb-24">
        {mockCollections.map((collection) => (
          <button
            key={collection.id}
            onClick={() => onCollectionClick(collection.id)}
            className="w-full bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 mb-2">
                  {collection.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {collection.description}
                </p>
                <p className="text-xs text-gray-500">
                  {collection.stats}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
