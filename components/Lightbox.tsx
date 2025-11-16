import React, { useEffect, useRef } from 'react';

interface Image {
  url: string;
  alt: string;
}

interface LightboxProps {
  images: Image[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNext, onPrev, onSelect }) => {
  const activeThumbnailRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (activeThumbnailRef.current) {
      activeThumbnailRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentIndex]);
  
  if (currentIndex === null) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex flex-col animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Top Bar */}
      <header className="flex-shrink-0 w-full flex justify-between items-center p-4 text-white z-20">
        <span className="font-semibold text-lg drop-shadow-md">{currentIndex + 1} / {images.length}</span>
        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      {/* Main Viewport */}
      <main className="flex-1 flex items-center justify-center relative w-full min-h-0" onClick={onClose}>
        
        {/* Previous button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Image and Caption */}
        <div className="relative h-full w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="block max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
           <div className="absolute bottom-0 text-center p-4 text-white w-full bg-gradient-to-t from-black/50 to-transparent pointer-events-none rounded-b-lg">
            <p className="drop-shadow-md text-sm md:text-base">{images[currentIndex].alt}</p>
          </div>
        </div>
        
        {/* Next button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </main>
      
      {/* Thumbnail Bar */}
      <footer className="flex-shrink-0 w-full p-4" onClick={e => e.stopPropagation()}>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {images.map((image, index) => (
                <button
                  key={image.url + index}
                  onClick={() => onSelect(index)}
                  ref={index === currentIndex ? activeThumbnailRef : null}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all duration-200 ${
                    currentIndex === index
                      ? 'border-2 border-white scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lightbox;