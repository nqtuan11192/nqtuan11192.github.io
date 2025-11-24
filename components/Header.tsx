import React, { useState } from 'react';

const navLinks = [
  // { href: '#hero', label: 'Home' },
  { href: '#couple', label: 'Cặp đôi' },
  { href: '#story', label: 'Câu chuyện tình yêu' },
  { href: '#album', label: 'Album ảnh' },
  { href: '#event', label: 'Sự kiện cưới' },
  { href: '#rsvp', label: 'Xác nhận tham dự' },
  { href: '#guestbook', label: 'Sổ lưu bút' },
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
          <a href="#hero">
            Vân Anh &#9829; Quốc Tuấn
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleGiftBoxClick}
            className="text-white/90 hover:text-white transition-colors duration-300 font-medium flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mừng cưới
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
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleGiftBoxClick}
            className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Mừng cưới
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;