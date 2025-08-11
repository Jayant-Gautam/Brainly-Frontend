import React from 'react';
import { Brain, Zap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  animated?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'full', 
  animated = true,
  theme = 'dark',
  className = '' 
}) => {
    // const sizeClasses = {
    //     sm: 'h-4 md:h-6 lg:h-8',
    //     md: 'h-6 md:h-8 lg:h-12',
    //     lg: 'h-8 md:h-12 lg:h-16',
    //     xl: 'h-12 md:h-16 lg:h-20'
    // };

    // const textSizeClasses = {
    //     sm: 'text-sm lg:text-lg',
    //     md: 'text-sm md:text-lg lg:text-xl',
    //     lg: 'text-lg md:text-xl lg:text-2xl',
    //     xl: 'text-xl md:text-2xl lg:text-3xl'
    // };

    // const iconSizeClasses = {
    //     sm: 'w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6',
    //     md: 'w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8',
    //     lg: 'w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10',
    //     xl: 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'
    // };
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-12 h-12'
  };

  // Theme-based colors
  const themeColors = {
    dark: {
      text: 'text-white',
      textSecondary: 'text-gray-500',
      background: 'from-purple-500/20 via-cyan-500/20 to-emerald-500/20',
      iconColor: 'text-white',
      gradientText: 'from-purple-500 via-cyan-500 to-emerald-500'
    },
    light: {
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      background: 'from-purple-100/60 via-cyan-100/60 to-emerald-100/60',
      iconColor: 'text-gray-800',
      gradientText: 'from-purple-600 via-cyan-600 to-emerald-600'
    }
  };

  const currentTheme = themeColors[theme];

  if (variant === 'icon') {
    return (
      <div className={`relative ${className}`}>
        <div className={`relative ${sizeClasses[size]} aspect-square flex items-center justify-center`}>
          {/* Animated neural network background */}
          <div className={`absolute inset-0 ${animated ? 'animate-pulse' : ''}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id={`brainGradient-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={theme === 'dark' ? "#8B5CF6" : "#7C3AED"} />
                  <stop offset="50%" stopColor={theme === 'dark' ? "#06B6D4" : "#0891B2"} />
                  <stop offset="100%" stopColor={theme === 'dark' ? "#10B981" : "#059669"} />
                </linearGradient>
                <linearGradient id={`pulseGradient-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={theme === 'dark' ? "#F59E0B" : "#D97706"} />
                  <stop offset="100%" stopColor={theme === 'dark' ? "#EF4444" : "#DC2626"} />
                </linearGradient>
              </defs>
              
              {/* Neural network nodes */}
              <circle cx="20" cy="30" r="3" fill="url(#brainGradient)" opacity="0.8">
                {animated && <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />}
              </circle>
              <circle cx="50" cy="20" r="4" fill="url(#brainGradient)" opacity="0.9">
                {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />}
              </circle>
              <circle cx="80" cy="35" r="3" fill="url(#brainGradient)" opacity="0.7">
                {animated && <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />}
              </circle>
              <circle cx="25" cy="70" r="4" fill="url(#brainGradient)" opacity="0.8">
                {animated && <animate attributeName="opacity" values="0.4;1;0.4" dur="1.9s" repeatCount="indefinite" />}
              </circle>
              <circle cx="70" cy="75" r="3" fill="url(#brainGradient)" opacity="0.9">
                {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite" />}
              </circle>
              
              {/* Neural connections */}
              <line x1="20" y1="30" x2="50" y2="20" stroke="url(#pulseGradient)" strokeWidth="1" opacity="0.6">
                {animated && <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />}
              </line>
              <line x1="50" y1="20" x2="80" y2="35" stroke="url(#pulseGradient)" strokeWidth="1" opacity="0.5">
                {animated && <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />}
              </line>
              <line x1="20" y1="30" x2="25" y2="70" stroke="url(#pulseGradient)" strokeWidth="1" opacity="0.4">
                {animated && <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.8s" repeatCount="indefinite" />}
              </line>
              <line x1="80" y1="35" x2="70" y2="75" stroke="url(#pulseGradient)" strokeWidth="1" opacity="0.6">
                {animated && <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.3s" repeatCount="indefinite" />}
              </line>
            </svg>
          </div>
          
          {/* Main brain icon */}
          <Brain className={`${iconSizeClasses[size]} text-white relative z-10 drop-shadow-lg`} />
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <h1 className={`font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent ${textSizeClasses[size]}`}>
          Second Brain
        </h1>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Icon */}
      <div className="relative">
        <div className={`relative ${sizeClasses[size]} aspect-square flex items-center justify-center`}>
          {/* Animated neural network background */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-emerald-500/20 ${animated ? 'animate-pulse' : ''}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="brainGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <linearGradient id="pulseGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
              
              {/* Neural network nodes */}
              <circle cx="15" cy="25" r="2" fill="url(#brainGradientFull)" opacity="0.8">
                {animated && <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />}
              </circle>
              <circle cx="50" cy="15" r="3" fill="url(#brainGradientFull)" opacity="0.9">
                {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />}
              </circle>
              <circle cx="85" cy="30" r="2" fill="url(#brainGradientFull)" opacity="0.7">
                {animated && <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />}
              </circle>
              <circle cx="20" cy="75" r="3" fill="url(#brainGradientFull)" opacity="0.8">
                {animated && <animate attributeName="opacity" values="0.4;1;0.4" dur="1.9s" repeatCount="indefinite" />}
              </circle>
              <circle cx="75" cy="80" r="2" fill="url(#brainGradientFull)" opacity="0.9">
                {animated && <animate attributeName="opacity" values="0.6;1;0.6" dur="2.1s" repeatCount="indefinite" />}
              </circle>
              <circle cx="50" cy="60" r="2" fill="url(#brainGradientFull)" opacity="0.6">
                {animated && <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.4s" repeatCount="indefinite" />}
              </circle>
              
              {/* Neural connections */}
              <line x1="15" y1="25" x2="50" y2="15" stroke="url(#pulseGradientFull)" strokeWidth="0.8" opacity="0.6">
                {animated && <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />}
              </line>
              <line x1="50" y1="15" x2="85" y2="30" stroke="url(#pulseGradientFull)" strokeWidth="0.8" opacity="0.5">
                {animated && <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />}
              </line>
              <line x1="15" y1="25" x2="20" y2="75" stroke="url(#pulseGradientFull)" strokeWidth="0.8" opacity="0.4">
                {animated && <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.8s" repeatCount="indefinite" />}
              </line>
              <line x1="85" y1="30" x2="75" y2="80" stroke="url(#pulseGradientFull)" strokeWidth="0.8" opacity="0.6">
                {animated && <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.3s" repeatCount="indefinite" />}
              </line>
              <line x1="50" y1="15" x2="50" y2="60" stroke="url(#pulseGradientFull)" strokeWidth="0.8" opacity="0.5">
                {animated && <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.6s" repeatCount="indefinite" />}
              </line>
              <line x1="20" y1="75" x2="50" y2="60" stroke="url(#pulseGradientFull)" strokeWidth="0.8" opacity="0.4">
                {animated && <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3.2s" repeatCount="indefinite" />}
              </line>
              <line x1="50" y1="60" x2="75" y2="80" stroke="url(#pulseGradientFull)" strokeWidth="0.8" opacity="0.5">
                {animated && <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.7s" repeatCount="indefinite" />}
              </line>
            </svg>
          </div>
          
          {/* Main brain icon with glow effect */}
          <div className="relative z-10 flex items-center justify-center">
            <Brain className={`${iconSizeClasses[size]} text-white drop-shadow-2xl`} />
            {animated && (
              <Zap className="absolute top-0 right-0 w-3 h-3 text-yellow-400 animate-pulse" />
            )}
          </div>
        </div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <h1 className={`font-bold bg-gradient-to-r ${currentTheme.gradientText} bg-clip-text text-transparent ${textSizeClasses[size]} leading-tight`}>
          Second Brain
        </h1>
        <p className={`text-xs ${currentTheme.textSecondary} font-medium tracking-wide`}>
          ORGANIZE • SHARE • CONNECT
        </p>
      </div>
    </div>
  );
};

export default Logo;