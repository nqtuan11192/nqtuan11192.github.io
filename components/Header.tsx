import React, { useState } from 'react';

const navLinks = [
  // { href: '#hero', label: 'Home' },
  { href: '#story', label: 'Chuyện tình yêu' },
  { href: '#album', label: 'Album ảnh' },
  { href: '#event', label: 'Sự kiện cưới' },
  { href: '#guestbook', label: 'Sổ lưu bút' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-rose-500 shadow-md`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-verdana text-white">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;