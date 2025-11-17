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

export const mockRecordings: Recording[] = [
  {
    id: '1',
    title: 'Evening walk',
    date: 'Nov 17',
    time: '6:45 PM',
    duration: '0:42',
    mood: 'Calm',
    reflection: 'The birds were singing so beautifully today. It reminded me to slow down and appreciate the small moments.',
    waveform: [30, 50, 40, 60, 70, 50, 40, 35, 45, 55, 65, 45, 35, 30, 40, 50, 45, 35, 40, 50],
  },
  {
    id: '2',
    title: 'Cafeteria chatter',
    date: 'Nov 16',
    time: '12:32 PM',
    duration: '0:48',
    mood: 'Social',
    reflection: 'Lunch break energy. So many conversations happening at once.',
    waveform: [40, 60, 50, 70, 80, 60, 50, 45, 55, 65, 75, 55, 45, 40, 50, 60, 55, 45, 50, 60],
  },
  {
    id: '3',
    title: 'Morning coffee',
    date: 'Nov 16',
    time: '8:15 AM',
    duration: '0:28',
    mood: 'Quiet',
    reflection: 'Just the sound of the coffee machine and my thoughts.',
    waveform: [20, 30, 25, 35, 40, 30, 25, 20, 25, 30, 35, 25, 20, 18, 22, 28, 24, 20, 22, 28],
  },
  {
    id: '4',
    title: 'Train platform',
    date: 'Nov 15',
    time: '7:30 AM',
    duration: '1:15',
    mood: 'Busy',
    reflection: 'Morning commute. The rhythm of the city waking up.',
    waveform: [50, 70, 60, 80, 90, 70, 60, 55, 65, 75, 85, 65, 55, 50, 60, 70, 65, 55, 60, 70],
  },
  {
    id: '5',
    title: 'Rain on window',
    date: 'Nov 14',
    time: '9:20 PM',
    duration: '2:03',
    mood: 'Calm',
    reflection: 'Peaceful evening. The rain created such a soothing rhythm.',
    waveform: [25, 35, 30, 40, 45, 35, 30, 28, 33, 38, 43, 33, 28, 25, 30, 35, 32, 28, 30, 35],
  },
  {
    id: '6',
    title: 'Office meeting',
    date: 'Nov 14',
    time: '2:00 PM',
    duration: '0:52',
    mood: 'Busy',
    waveform: [45, 65, 55, 75, 85, 65, 55, 50, 60, 70, 80, 60, 50, 45, 55, 65, 60, 50, 55, 65],
  },
  {
    id: '7',
    title: 'Park fountain',
    date: 'Nov 13',
    time: '3:15 PM',
    duration: '1:28',
    mood: 'Calm',
    reflection: 'Took a detour through the park. Worth it.',
    waveform: [30, 45, 38, 52, 58, 45, 38, 35, 42, 48, 55, 42, 35, 32, 40, 48, 44, 35, 40, 48],
  },
  {
    id: '8',
    title: 'Kitchen sounds',
    date: 'Nov 13',
    time: '7:45 PM',
    duration: '0:35',
    mood: 'Quiet',
    waveform: [22, 32, 28, 38, 42, 32, 28, 24, 30, 35, 40, 30, 24, 22, 28, 33, 30, 24, 28, 33],
  },
];

export interface Collection {
  id: string;
  title: string;
  description: string;
  stats: string;
  recordingIds: string[];
}

export const mockCollections: Collection[] = [
  {
    id: 'mondays',
    title: 'All Your Mondays (Last Month)',
    description: 'Listen to every Monday you recorded in the past 30 days.',
    stats: '4 recordings · 3 min total',
    recordingIds: ['2', '4', '6'],
  },
  {
    id: 'this-week',
    title: 'This Week in Sound',
    description: 'Your Echoes from the last 7 days.',
    stats: '6 recordings · 7 min total',
    recordingIds: ['1', '2', '3', '4', '5', '6'],
  },
  {
    id: 'morning-evening',
    title: 'Morning vs Evening',
    description: 'Compare how your mornings and evenings sound.',
    stats: '8 recordings',
    recordingIds: ['1', '3', '4', '5', '8'],
  },
  {
    id: 'longest',
    title: 'Your Longest Five Moments',
    description: 'The five longest Echoes you have recorded.',
    stats: '5 recordings · 11 min total',
    recordingIds: ['4', '5', '7'],
  },
  {
    id: 'quietest',
    title: 'Your Quietest Days',
    description: 'Days where you didn\'t record anything.',
    stats: '12 days',
    recordingIds: [],
  },
];