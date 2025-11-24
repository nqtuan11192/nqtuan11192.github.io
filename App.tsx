import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CoupleInfo from './components/CoupleInfo';
import Countdown from './components/Countdown';
import WeddingEvents from './components/WeddingEvents';
import OurStory from './components/OurStory';
import PhotoAlbum from './components/PhotoAlbum';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import GiftBox from './components/GiftBox';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-rose-50 text-slate-700">
      <Header />
      <main>
        <HeroSlider />
        <CoupleInfo />
        <OurStory />
        <PhotoAlbum />
        <Countdown />
        <WeddingEvents />
        <RSVP />
        <Guestbook />
      </main>
      <Footer />
      <GiftBox />
    </div>
  );
};

export default App;