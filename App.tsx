import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import PhotoAlbum from './components/PhotoAlbum';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-rose-50 text-slate-700">
      <Header />
      <main>
        <HeroSlider />
        <Countdown />
        <OurStory />
        <PhotoAlbum />
      </main>
      <Footer />
    </div>
  );
};

export default App;