import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  // { href: '#hero', label: 'Home' },
  { href: '/#couple', label: 'Cặp đôi', isAnchor: true },
  { href: '/#story', label: 'Câu chuyện tình yêu', isAnchor: true },
  { href: '/#album', label: 'Album ảnh', isAnchor: true },
  { href: '/#event', label: 'Thiệp mời cưới', isAnchor: true },
  { href: '/#rsvp', label: 'Xác nhận tham dự', isAnchor: true },
  { href: '/#guestbook', label: 'Sổ lưu bút', isAnchor: true },
];


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleGiftBoxClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch custom event to open gift box
    window.dispatchEvent(new CustomEvent('openGiftBox'));
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-rose-500 shadow-md`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-script text-white">
          <Link to="/">
            Vân Anh &#9829; Quốc Tuấn
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg"
              >
                {link.label}
              </Link>
            )
          ))}
          <button
            onClick={handleGiftBoxClick}
            className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg flex items-center gap-1"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg> */}
            Hộp mừng cưới
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-rose-500`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleLinkClick}
                className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg"
              >
                {link.label}
              </Link>
            )
          ))}
          <button
            onClick={handleGiftBoxClick}
            className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg flex items-center gap-2"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg> */}
            Hộp mừng cưới
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;