
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Preparando algo especial...",
    "Carregando memórias especiais...",
    "Criando magia para vocês dois...",
    "Quase pronto para a surpresa..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-900 via-red-900 to-pink-900 flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Hearts */}
        <div className="relative">
          <div className="flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className={`w-8 h-8 text-rose-300 animate-pulse`}
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s'
                }}
                fill="currentColor"
              />
            ))}
          </div>
          
          {/* Floating hearts animation */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <Heart
                key={`floating-${i}`}
                className={`absolute w-4 h-4 text-rose-200 opacity-60 animate-float-heart`}
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: '4s'
                }}
                fill="currentColor"
              />
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="h-8">
          <p className="text-xl text-rose-100 font-light animate-fade-in">
            {messages[currentMessage]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-rose-800/30 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-rose-400 to-pink-400 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <p className="text-rose-200 text-sm mt-2 font-light">{progress}%</p>
        </div>

        {/* Subtitle */}
        <p className="text-rose-300 text-lg font-light italic">
          Uma surpresa especial está chegando...
        </p>
      </div>
    </div>
  );
};

export default PreLoader;
