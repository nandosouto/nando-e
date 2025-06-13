
import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Vídeo da Nossa
            <span className="block bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Homenagem Especial
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Um presente do seu Nando, preparado com todo o amor do mundo
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group">
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
          
          {/* Video Frame */}
          <div 
            className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group-hover:border-rose-500/30 transition-all duration-500"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            {/* Video Placeholder */}
            <div className="aspect-video relative bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
              </div>
              
              {/* Video Preview/Thumbnail */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer group/play">
                  <Play className="w-10 h-10 text-white ml-1 group-hover/play:scale-110 transition-transform duration-200" fill="currentColor" />
                </div>
                <p className="text-gray-400 mt-6 text-lg">Clique para assistir nossa história</p>
              </div>
            </div>

            {/* Video Controls Overlay */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                    )}
                  </button>
                  
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>
                </div>

                <button className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm">
                  <Maximize className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-400 h-1 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Prepare o coração para uma jornada única através dos nossos momentos mais especiais
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
