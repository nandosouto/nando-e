
import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    // Load Wistia scripts
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/89dog9jlcw.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);

    // Add Wistia styles
    const style = document.createElement('style');
    style.textContent = `
      wistia-player[media-id='89dog9jlcw']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/89dog9jlcw/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup scripts and styles on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="video-showcase" className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
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
          >
            {/* Wistia Video Player */}
            <div className="aspect-video relative">
              <wistia-player media-id="89dog9jlcw" aspect="1.7777777777777777" className="w-full h-full"></wistia-player>
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
