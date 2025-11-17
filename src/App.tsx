import { useState } from 'react';
import { OnboardingFlow } from './components/OnboardingFlow';
import { HomeScreen } from './components/HomeScreen';
import { ArchiveScreen } from './components/ArchiveScreen';
import { CollectionsScreen } from './components/CollectionsScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { SaveRecordingScreen } from './components/SaveRecordingScreen';
import { RecordingDetailScreen } from './components/RecordingDetailScreen';
import { CollectionDetailScreen } from './components/CollectionDetailScreen';
import { TabBar } from './components/TabBar';

export type Screen = 
  | { type: 'onboarding', step: number }
  | { type: 'home' }
  | { type: 'recording' }
  | { type: 'save-recording', duration: number }
  | { type: 'archive' }
  | { type: 'collections' }
  | { type: 'profile' }
  | { type: 'recording-detail', recordingId: string }
  | { type: 'collection-detail', collectionId: string };

export interface Recording {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  mood?: string;
  reflection?: string;
  waveform: number[];
}

export default function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>({ type: 'onboarding', step: 1 });
  const [activeTab, setActiveTab] = useState<'home' | 'archive' | 'collections' | 'profile'>('home');

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    if (screen.type === 'home' || screen.type === 'archive' || screen.type === 'collections' || screen.type === 'profile') {
      setActiveTab(screen.type);
    }
  };

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
    navigate({ type: 'home' });
    setActiveTab('home');
  };

  const handleTabChange = (tab: 'home' | 'archive' | 'collections' | 'profile') => {
    setActiveTab(tab);
    navigate({ type: tab });
  };

  const showTabBar = hasCompletedOnboarding && 
    currentScreen.type !== 'onboarding' && 
    currentScreen.type !== 'recording';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* iPhone Frame */}
      <div className="relative w-[390px] h-[844px] bg-white rounded-[60px] shadow-2xl overflow-hidden border-8 border-gray-900">
        {/* Screen Content */}
        <div className="w-full h-full bg-white overflow-hidden flex flex-col">
          {/* Dynamic Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-gray-900 rounded-b-3xl z-50" />
          
          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            {currentScreen.type === 'onboarding' && (
              <OnboardingFlow 
                step={currentScreen.step} 
                onNext={(step) => navigate({ type: 'onboarding', step })}
                onComplete={completeOnboarding}
              />
            )}
            
            {currentScreen.type === 'home' && (
              <HomeScreen 
                onStartRecording={() => navigate({ type: 'recording' })}
                onStopRecording={(duration) => navigate({ type: 'save-recording', duration })}
              />
            )}

            {currentScreen.type === 'recording' && (
              <HomeScreen 
                onStartRecording={() => navigate({ type: 'recording' })}
                onStopRecording={(duration) => navigate({ type: 'save-recording', duration })}
                isRecording
              />
            )}

            {currentScreen.type === 'save-recording' && (
              <SaveRecordingScreen 
                duration={currentScreen.duration}
                onSave={() => navigate({ type: 'archive' })}
                onDiscard={() => navigate({ type: 'home' })}
              />
            )}

            {currentScreen.type === 'archive' && (
              <ArchiveScreen 
                onRecordingClick={(id) => navigate({ type: 'recording-detail', recordingId: id })}
              />
            )}

            {currentScreen.type === 'collections' && (
              <CollectionsScreen 
                onCollectionClick={(id) => navigate({ type: 'collection-detail', collectionId: id })}
              />
            )}

            {currentScreen.type === 'profile' && (
              <ProfileScreen />
            )}

            {currentScreen.type === 'recording-detail' && (
              <RecordingDetailScreen 
                recordingId={currentScreen.recordingId}
                onBack={() => navigate({ type: 'archive' })}
              />
            )}

            {currentScreen.type === 'collection-detail' && (
              <CollectionDetailScreen 
                collectionId={currentScreen.collectionId}
                onBack={() => navigate({ type: 'collections' })}
                onRecordingClick={(id) => navigate({ type: 'recording-detail', recordingId: id })}
              />
            )}
          </div>

          {/* Tab Bar */}
          {showTabBar && (
            <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
          )}
        </div>
      </div>
    </div>
  );
}
