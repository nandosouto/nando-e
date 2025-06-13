
import React, { useState } from 'react';
import PreLoader from '../components/PreLoader';
import NetflixHeader from '../components/NetflixHeader';
import NetflixHero from '../components/NetflixHero';
import VideoShowcase from '../components/VideoShowcase';

const Index = () => {
  const [showPreLoader, setShowPreLoader] = useState(true);

  const handlePreLoaderComplete = () => {
    setShowPreLoader(false);
  };

  if (showPreLoader) {
    return <PreLoader onComplete={handlePreLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <NetflixHeader />
      
      <main>
        <NetflixHero />
        <VideoShowcase />
      </main>
    </div>
  );
};

export default Index;
