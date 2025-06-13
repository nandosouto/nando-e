
import React from 'react';
import { Play, Info, Heart } from 'lucide-react';

const NetflixHero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80"
          alt="Romantic background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center min-h-screen px-4 md:px-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="flex items-center space-x-2 mb-6">
            <Heart className="w-5 h-5 text-rose-400" fill="currentColor" />
            <span className="text-rose-400 text-sm font-medium tracking-wider uppercase">
              Exclusivo para você
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nossa História
            <span className="block text-3xl md:text-5xl bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              de Amor
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Uma coleção especial de momentos únicos, memórias inesquecíveis e todo o amor 
            que construímos juntos. Preparado especialmente para você, com todo carinho do mundo.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group flex items-center justify-center px-8 py-4 bg-white text-black rounded font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" fill="currentColor" />
              Assistir Agora
            </button>
            
            <button className="group flex items-center justify-center px-8 py-4 bg-gray-800/80 text-white rounded font-bold text-lg hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-gray-500">
              <Info className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Mais Informações
            </button>
          </div>

          {/* Subtitle */}
          <div className="mt-12">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
              Uma produção especial de
            </p>
            <p className="text-2xl font-light text-rose-300">
              Nando Productions ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-rose-400/20 animate-float-slow`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`
            }}
            size={16 + (i % 3) * 8}
            fill="currentColor"
          />
        ))}
      </div>
    </section>
  );
};

export default NetflixHero;
