
import React, { useState, useEffect, useCallback } from 'react';

const base = import.meta.env.BASE_URL

const slides = [
  { url: `${base}images/album_1/HAN02210.jpg`, alt: 'HAN02210' },
  { url: `${base}images/album_1/HAN02296.jpg`, alt: 'HAN02296' },
  { url: `${base}images/album_1/HAN02313.jpg`, alt: 'HAN02267' },
  { url: `${base}images/album_1/HAN02565.jpg`, alt: 'HAN02565' },
  { url: `${base}images/album_1/HAN02790.jpg`, alt: 'HAN02790' },
  { url: `${base}images/HAN02641.JPG`, alt: 'HAN02641' },
  { url: `${base}images/album_2/DMI_3044.jpg`, alt: 'DMI_3044' },
  { url: `${base}images/album_2/DMI_3574.jpg`, alt: 'DMI_3574' },
  { url: `${base}images/album_2/DMI_3802.jpg`, alt: 'DMI_3802' },
  { url: `${base}images/album_2/DMI_4604.JPG`, alt: 'DMI_4604' },
  { url: `${base}images/album_2/DMI_4922.JPG`, alt: 'DMI_4922' },
]

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const sliderInterval = setInterval(goToNext, 5000); // Auto-play every 5 seconds
    return () => clearInterval(sliderInterval);
  }, [goToNext]);


  return (
    <section id="hero" className="relative h-screen w-full -mt-20">
      <div className="w-full h-full overflow-hidden">
        <div
          className="whitespace-nowrap h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="inline-block w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.url})` }}
            ></div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="font-script text-4xl md:text-6xl lg:text-7xl drop-shadow-lg">Vân Anh &#9829; Quốc Tuấn</h1>
        <p className="mt-4 text-lg md:text-2xl font-verdana tracking-wider drop-shadow-md">We'are Getting Married!</p>
        <p className="text-lg md:text-2xl font-verdana tracking-wider drop-shadow-md">December 31, 2025</p>
      </div>

      {/* Slider Controls */}
      <button onClick={goToPrevious} className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
