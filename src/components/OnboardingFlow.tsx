import { Button } from './ui/button';

interface OnboardingFlowProps {
  step: number;
  onNext: (nextStep: number) => void;
  onComplete: () => void;
}

export function OnboardingFlow({ step, onNext, onComplete }: OnboardingFlowProps) {
  const steps = [
    {
      title: "Welcome to Echo",
      subtitle: "Capture the small sounds of your day.",
      illustration: (
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-1 items-end">
              {[20, 40, 60, 80, 60, 40, 20, 30, 50, 70, 50, 30].map((height, i) => (
                <div 
                  key={i} 
                  className="w-2 bg-gradient-to-t from-blue-400 to-blue-300 rounded-full"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Listen back to your life",
      subtitle: "Echo stores your sounds so you can reflect later.",
      illustration: (
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-3 w-full px-8">
              {[0.7, 0.5, 0.9, 0.6].map((width, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[6px] border-l-blue-500 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
                  </div>
                  <div 
                    className="h-1 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full"
                    style={{ width: `${width * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Your audio diary starts here",
      subtitle: "Record, archive, and rediscover patterns in your days.",
      illustration: (
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-300 flex items-center justify-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentStep = steps[step - 1];
  const isLastStep = step === steps.length;

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 pb-12 pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="flex-1 flex flex-col items-center justify-center">
        {currentStep.illustration}
        
        <h1 className="mt-12 mb-4 text-center">
          {currentStep.title}
        </h1>
        
        <p className="text-center text-gray-600 max-w-xs">
          {currentStep.subtitle}
        </p>
      </div>

      <div className="w-full space-y-4">
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i + 1 === step 
                  ? 'w-8 bg-blue-500' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={() => isLastStep ? onComplete() : onNext(step + 1)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 rounded-xl"
        >
          {isLastStep ? 'Get Started' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
