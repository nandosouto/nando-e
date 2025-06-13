
import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const NetflixHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="px-4 md:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-rose-400" fill="currentColor" />
              <span className="text-2xl font-bold text-white">Nando</span>
              <span className="text-2xl font-bold text-rose-400">Flix</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-rose-400 transition-colors duration-300 font-medium">
              Início
            </a>
          </nav>

          {/* Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="currentColor" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="pt-4 pb-2 space-y-3">
            <a href="#inicio" className="block text-white hover:text-rose-400 transition-colors duration-300 py-2">
              Início
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NetflixHeader;
