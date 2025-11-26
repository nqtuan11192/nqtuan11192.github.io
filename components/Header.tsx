import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  // { href: '#hero', label: 'Home' },
  { href: '/#couple', label: 'Cặp đôi', isAnchor: true },
  { href: '/#story', label: 'Câu chuyện tình yêu', isAnchor: true },
  // Album link removed - now using dropdown
  { href: '/#event', label: 'Thiệp mời cưới', isAnchor: true },
  { href: '/#rsvp', label: 'Xác nhận tham dự', isAnchor: true },
  { href: '/#guestbook', label: 'Sổ lưu bút', isAnchor: true },
];

const albumLinks = [
  { href: '/album#album-1', label: 'Album 1: Nhật Bản' },
  { href: '/album#album-2', label: 'Album 2: Việt Nam' },
  { href: '/album#album-3', label: 'Album 3: Chuyến đi' },
];


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlbumDropdownOpen, setIsAlbumDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsAlbumDropdownOpen(false);
  };

  const handleGiftBoxClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch custom event to open gift box
    window.dispatchEvent(new CustomEvent('openGiftBox'));
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-rose-500 shadow-md'
        : 'bg-rose-500/15 backdrop-blur-lg shadow-lg border-b border-white/30'
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-script text-white">
          <Link to="/">
            Vân Anh &#9829; Quốc Tuấn
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          {/* First 2 items */}
          {navLinks.slice(0, 2).map((link) => (
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

          {/* Album Dropdown - 3rd position */}
          <div
            className="relative"
            onMouseEnter={() => setIsAlbumDropdownOpen(true)}
            onMouseLeave={() => setIsAlbumDropdownOpen(false)}
          >
            <a
              href="/#album"
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg flex items-center gap-1"
            >
              Album ảnh
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {isAlbumDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-rose-100 rounded-lg shadow-xl py-2 min-w-[200px] before:content-[''] before:absolute before:bottom-full before:left-0 before:right-0 before:h-2">
                {albumLinks.map((album) => (
                  <Link
                    key={album.href}
                    to={album.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-slate-700 hover:bg-rose-200 hover:text-rose-600 transition-colors duration-200"
                  >
                    {album.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining items */}
          {navLinks.slice(2).map((link) => (
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

          {/* Mobile Album Dropdown */}
          <div className="w-full">
            <button
              onClick={() => setIsAlbumDropdownOpen(!isAlbumDropdownOpen)}
              className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg flex items-center gap-1 justify-center w-full"
            >
              Album ảnh
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isAlbumDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isAlbumDropdownOpen && (
              <div className="mt-2 space-y-2">
                {albumLinks.map((album) => (
                  <Link
                    key={album.href}
                    to={album.href}
                    onClick={handleLinkClick}
                    className="block text-white/80 hover:text-white transition-colors duration-200 text-base"
                  >
                    {album.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleGiftBoxClick}
            className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-lg flex items-center gap-2"
          >
            Hộp mừng cưới
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;