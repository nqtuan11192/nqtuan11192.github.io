import React, { useState } from 'react';
import Lightbox from './Lightbox';

const base = import.meta.env.BASE_URL

const galleryImages = [
  { id: 0, url: `${base}images/HAN02209.JPG`, alt: 'I can conquer the world with one hand, as long as you’re holding the other.' },
  { id: 1, url: `${base}images/HAN02292.JPG`, alt: 'Together is our favorite place to be.' },
  { id: 2, url: `${base}images/HAN02316.JPG`, alt: 'Together is our favorite place to be.' },
  { id: 3, url: `${base}images/HAN02438.JPG`, alt: 'Every love story is beautiful, but ours is my favorite.' },
  { id: 4, url: `${base}images/HAN02486.JPG`, alt: 'Walking side-by-side into our forever.' },
  { id: 5, url: `${base}images/HAN02510.JPG`, alt: 'You are my today and all of my tomorrows.' },
  { id: 6, url: `${base}images/HAN02613.JPG`, alt: 'A quiet moment, a lifetime of love.' },
  { id: 7, url: `${base}images/HAN02641.JPG`, alt: 'Finding paradise wherever you are.' },
  { id: 8, url: `${base}images/HAN02686.JPG`, alt: 'The best things in life are better with you.' },
  { id: 9, url: `${base}images/HAN02886.JPG`, alt: 'The best things in life are better with you.' },
  { id: 10, url: `${base}images/HAN02915.JPG`, alt: 'A glance, a smile, a love story unfolds.' },
  { id: 11, url: `${base}images/HAN02927.JPG`, alt: 'Two hearts, one journey.' },
  { id: 12, url: `${base}images/HAN03231.JPG`, alt: 'Two hearts, one journey.' },
  { id: 13, url: `${base}images/HAN03279.JPG`, alt: 'Lost in your eyes and the beauty of this moment.' },
]

// export default galleryImages


const PhotoAlbum: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const goToNext = () => {
    if (currentImageIndex === null) return;
    setCurrentImageIndex((prevIndex) => (prevIndex! + 1) % galleryImages.length);
  };

  const goToPrevious = () => {
    if (currentImageIndex === null) return;
    setCurrentImageIndex((prevIndex) => (prevIndex! + galleryImages.length - 1) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const isLightboxOpen = currentImageIndex !== null;

  return (
    <>
      <section id="album" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            {/* <h2 className="font-serif text-4xl md:text-5xl text-slate-800">Kỷ niệm của chúng mình</h2> */}
            <h2 className="font-vietnamese-script text-2xl md:text-5xl text-slate-700 mb-4">
              Kỷ niệm của chúng mình
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Những khoảnh khắc mà chúng mình sẽ nhớ mãi.<br />
              Mỗi tấm hình là một phần câu chuyện trong hành trình đến bên nhau.
            </p>
            <div className="w-24 h-1 bg-rose-300 mx-auto mt-4"></div>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group overflow-hidden rounded-xl shadow-md cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrevious}
          onSelect={goToImage}
        />
      )}
    </>
  );
};

export default PhotoAlbum;