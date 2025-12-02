import React, { useState, useEffect, useRef } from 'react';

const FloatingMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleGiftBoxClick = () => {
        window.dispatchEvent(new CustomEvent('openGiftBox'));
        setIsOpen(false);
    };

    const handleContactClick = () => {
        window.dispatchEvent(new CustomEvent('openContactInfo'));
        setIsOpen(false);
    };

    const handleScrollTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <div ref={menuRef} className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            {/* Menu Items */}
            <div className={`flex flex-col gap-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>

                {/* Scroll Top Button */}
                <div className="flex items-center gap-3 group">
                    <span className="bg-slate-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        Lên đầu trang
                    </span>
                    <button
                        onClick={handleScrollTopClick}
                        className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 mr-1"
                        aria-label="Lên đầu trang"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

                {/* Gift Box Button */}
                <div className="flex items-center gap-3 group" style={{ transitionDelay: '50ms' }}>
                    <span className="bg-slate-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        Hộp mừng cưới
                    </span>
                    <button
                        onClick={handleGiftBoxClick}
                        className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 mr-1"
                        aria-label="Hộp mừng cưới"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                    </button>
                </div>

                {/* Contact Info Button */}
                <div className="flex items-center gap-3 group" style={{ transitionDelay: '100ms' }}>
                    <span className="bg-slate-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        Liên hệ
                    </span>
                    <button
                        onClick={handleContactClick}
                        className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 mr-1"
                        aria-label="Thông tin liên hệ"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Main Toggle Button */}
            <button
                onClick={toggleMenu}
                className={`bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 relative z-50 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                aria-label="Menu"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}

                {/* Pulsing indicator when closed */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default FloatingMenu;
