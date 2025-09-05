import React, { useState, useEffect } from 'react';
import { Brain, Zap, BookOpen, Network } from 'lucide-react';

interface LoaderProps {
  loadingText?: string;
  showProgress?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ 
  // loadingText = "Organizing your thoughts...",
  showProgress = true 
}) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const loadingPhases = [
    { text: "Initializing neural pathways...", icon: Brain },
    { text: "Connecting knowledge nodes...", icon: Network },
    { text: "Syncing your thoughts...", icon: Zap },
    { text: "Preparing your second brain...", icon: BookOpen }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 50);

    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % loadingPhases.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, []);

  const CurrentIcon = loadingPhases[currentPhase].icon;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <g key={i}>
            <line
              x1={`${20 + i * 10}%`}
              y1={`${10 + i * 8}%`}
              x2={`${80 - i * 5}%`}
              y2={`${90 - i * 8}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <circle
              cx={`${20 + i * 10}%`}
              cy={`${10 + i * 8}%`}
              r="2"
              fill="#8B5CF6"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}
      </svg>

      <div className="relative z-10 text-center px-8 max-w-md">
        {/* Main brain icon with pulsing animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse scale-150" />
          <div className="relative bg-gradient-to-br from-purple-500 to-blue-500 w-24 h-24 mx-auto rounded-full flex items-center justify-center animate-bounce">
            <Brain className="w-12 h-12 text-white" />
          </div>
          
          {/* Orbiting icons */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <Network className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Loading text with phase transition */}
        <div className="mb-6 h-16 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3 mb-2 transition-all duration-500 ease-in-out">
            <CurrentIcon className="w-5 h-5 text-purple-300 animate-pulse" />
            <h2 className="text-xl font-medium text-white animate-pulse">
              {loadingPhases[currentPhase].text}
            </h2>
          </div>
          <p className="text-purple-200 text-sm opacity-75">
            Building your knowledge ecosystem
          </p>
        </div>

        {/* Progress bar */}
        {showProgress && (
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-purple-200 text-xs">Progress</span>
              <span className="text-purple-200 text-xs font-mono">{progress}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-30 animate-pulse rounded-full" />
              </div>
            </div>
          </div>
        )}

        {/* Floating thought bubbles */}
        <div className="absolute -top-10 -left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -top-6 -right-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-8 -left-6 w-3 h-3 bg-purple-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default Loader;