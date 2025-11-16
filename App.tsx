import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import OurStory from './components/OurStory';
import PhotoAlbum from './components/PhotoAlbum';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-rose-50 text-slate-700">
      <Header />
      <main>
        <HeroSlider />
        <OurStory />
        <PhotoAlbum />
      </main>
      <Footer />
    </div>
  );
};

export default App;