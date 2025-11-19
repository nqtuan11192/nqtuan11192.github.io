import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Countdown from './components/Countdown';
import WeddingEvents from './components/WeddingEvents';
import OurStory from './components/OurStory';
import PhotoAlbum from './components/PhotoAlbum';
import Guestbook from './components/Guestbook';
import GiftBox from './components/GiftBox';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-rose-50 text-slate-700">
      <Header />
      <main>
        <HeroSlider />
        <OurStory />
        <PhotoAlbum />
        <Countdown />
        <WeddingEvents />
        <Guestbook />
      </main>
      <Footer />
      <GiftBox />
    </div>
  );
};

export default App;