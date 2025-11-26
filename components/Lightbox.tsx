import React, { useEffect, useRef, useState } from 'react';

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
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(currentIndex);

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

  // Block all page interactions when lightbox is open
  useEffect(() => {
    // Save original body styles
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;

    // Lock body scroll and prevent all interactions
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';

    // Cleanup: restore original styles when lightbox closes
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
    };
  }, []);

  // Touch event handlers for swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX; // Initialize end position
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;

    // Calculate horizontal movement
    const diff = Math.abs(touchStartX.current - touchEndX.current);

    // If horizontal movement is significant, prevent vertical scrolling
    if (diff > 10) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    handleSwipeEnd();
  };

  // Mouse event handlers for drag-to-swipe on desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      handleSwipeEnd();
      isDragging.current = false;
    }
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      touchStartX.current = 0;
      touchEndX.current = 0;
    }
  };

  // Common swipe/drag end logic
  const handleSwipeEnd = () => {
    const swipeThreshold = 50; // Minimum distance for a swipe
    const diff = touchStartX.current - touchEndX.current;

    // Only trigger if we actually moved
    if (touchStartX.current !== 0 && touchEndX.current !== 0) {
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped/dragged left - go to next image
          onNext();
        } else {
          // Swiped/dragged right - go to previous image
          onPrev();
        }
      }
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Handle image transition animation
  useEffect(() => {
    if (currentIndex !== displayIndex) {
      setIsTransitioning(true);

      // Wait for fade out, then update image
      const timer = setTimeout(() => {
        setDisplayIndex(currentIndex);
        setIsTransitioning(false);
      }, 150); // Half of the transition duration

      return () => clearTimeout(timer);
    }
  }, [currentIndex, displayIndex]);

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
      <main
        className="flex-1 flex items-center justify-center relative w-full min-h-0"
        onClick={onClose}
      >

        {/* Previous button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Image and Caption */}
        <div
          className="relative h-full w-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'none' }}
          onClick={e => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={images[displayIndex].url}
            alt={images[displayIndex].alt}
            className={`block max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-none transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
          />
          <div className="absolute bottom-0 text-center p-4 text-white w-full bg-gradient-to-t from-black/50 to-transparent pointer-events-none rounded-b-lg">
            <p className="drop-shadow-md text-sm md:text-base">{images[displayIndex].alt}</p>
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
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all duration-200 ${currentIndex === index
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