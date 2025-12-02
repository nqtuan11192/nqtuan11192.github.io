import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import PhotoAlbumPage from './components/PhotoAlbumPage';
import Footer from './components/Footer';
import GiftBox from './components/GiftBox';
import ContactInfo from './components/ContactInfo';
import FloatingMenu from './components/FloatingMenu';

const App: React.FC = () => {
  return (
    <div className="bg-rose-50 text-slate-700">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album" element={<PhotoAlbumPage />} />
        </Routes>
      </main>
      <Footer />
      <GiftBox />
      <ContactInfo />
      <FloatingMenu />
    </div>
  );
};

export default App;