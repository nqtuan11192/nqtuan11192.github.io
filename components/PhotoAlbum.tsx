import React, { useState } from 'react';
import Lightbox from './Lightbox';

const base = import.meta.env.BASE_URL

const galleryImages1 = [
  { id: 0, url: `${base}images/HAN02209.JPG`, alt: 'I can conquer the world with one hand, as long as you are holding the other.' },
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

// Second gallery - you can add different images here
const galleryImages2 = [
  { id: 0, url: `${base}images/HAN02325.JPG`, alt: 'Beautiful moments together' },
  { id: 1, url: `${base}images/HAN02472.JPG`, alt: 'Our journey continues' },
  { id: 2, url: `${base}images/HAN02520.JPG`, alt: 'Love in every moment' },
  { id: 3, url: `${base}images/HAN02564.JPG`, alt: 'Forever and always' },
  { id: 4, url: `${base}images/HAN02790.JPG`, alt: 'Together forever' },
]

// Third gallery
const galleryImages3 = [
  { id: 0, url: `${base}images/HAN02209.JPG`, alt: 'Precious memories' },
  { id: 1, url: `${base}images/HAN02292.JPG`, alt: 'Love and laughter' },
  { id: 2, url: `${base}images/HAN02316.JPG`, alt: 'Our special day' },
  { id: 3, url: `${base}images/HAN02325.JPG`, alt: 'Together always' },
  { id: 4, url: `${base}images/HAN02438.JPG`, alt: 'Forever in love' },
]

// export default galleryImages


const PhotoAlbum: React.FC = () => {
  const [currentImageIndex1, setCurrentImageIndex1] = useState<number | null>(null);
  const [currentImageIndex2, setCurrentImageIndex2] = useState<number | null>(null);
  const [currentImageIndex3, setCurrentImageIndex3] = useState<number | null>(null);

  const openLightbox1 = (index: number) => {
    setCurrentImageIndex1(index);
  };

  const closeLightbox1 = () => {
    setCurrentImageIndex1(null);
  };

  const goToNext1 = () => {
    if (currentImageIndex1 === null) return;
    setCurrentImageIndex1((prevIndex) => (prevIndex! + 1) % galleryImages1.length);
  };

  const goToPrevious1 = () => {
    if (currentImageIndex1 === null) return;
    setCurrentImageIndex1((prevIndex) => (prevIndex! + galleryImages1.length - 1) % galleryImages1.length);
  };

  const goToImage1 = (index: number) => {
    setCurrentImageIndex1(index);
  };

  // Second gallery functions
  const openLightbox2 = (index: number) => {
    setCurrentImageIndex2(index);
  };

  const closeLightbox2 = () => {
    setCurrentImageIndex2(null);
  };

  const goToNext2 = () => {
    if (currentImageIndex2 === null) return;
    setCurrentImageIndex2((prevIndex) => (prevIndex! + 1) % galleryImages2.length);
  };

  const goToPrevious2 = () => {
    if (currentImageIndex2 === null) return;
    setCurrentImageIndex2((prevIndex) => (prevIndex! + galleryImages2.length - 1) % galleryImages2.length);
  };

  const goToImage2 = (index: number) => {
    setCurrentImageIndex2(index);
  };

  // Third gallery functions
  const openLightbox3 = (index: number) => {
    setCurrentImageIndex3(index);
  };

  const closeLightbox3 = () => {
    setCurrentImageIndex3(null);
  };

  const goToNext3 = () => {
    if (currentImageIndex3 === null) return;
    setCurrentImageIndex3((prevIndex) => (prevIndex! + 1) % galleryImages3.length);
  };

  const goToPrevious3 = () => {
    if (currentImageIndex3 === null) return;
    setCurrentImageIndex3((prevIndex) => (prevIndex! + galleryImages3.length - 1) % galleryImages3.length);
  };

  const goToImage3 = (index: number) => {
    setCurrentImageIndex3(index);
  };

  const isLightboxOpen1 = currentImageIndex1 !== null;
  const isLightboxOpen2 = currentImageIndex2 !== null;
  const isLightboxOpen3 = currentImageIndex3 !== null;

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

          {/* First Gallery */}
          <div className="mb-16">
            <h3 className="font-vietnamese-script text-xl md:text-3xl text-slate-600 mb-6 text-center">
              Album 1: Bộ ảnh cưới tại Nhật Bản - nơi tình yêu bắt đầu
            </h3>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {galleryImages1.map((image, index) => (
                <div
                  key={image.id}
                  className="break-inside-avoid group overflow-hidden rounded-xl shadow-md cursor-pointer"
                  onClick={() => openLightbox1(index)}
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

          {/* Second Gallery */}
          <div>
            <h3 className="font-vietnamese-script text-xl md:text-3xl text-slate-600 mb-6 text-center">
              Album 2: Bộ ảnh cưới tại Việt Nam
            </h3>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {galleryImages2.map((image, index) => (
                <div
                  key={image.id}
                  className="break-inside-avoid group overflow-hidden rounded-xl shadow-md cursor-pointer"
                  onClick={() => openLightbox2(index)}
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

          {/* Third Gallery */}
          <div className="mt-16">
            <h3 className="font-vietnamese-script text-xl md:text-3xl text-slate-600 mb-6 text-center">
              Album 3: Những chuyến đi bên nhau
            </h3>
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {galleryImages3.map((image, index) => (
                <div
                  key={image.id}
                  className="break-inside-avoid group overflow-hidden rounded-xl shadow-md cursor-pointer"
                  onClick={() => openLightbox3(index)}
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
        </div>
      </section>

      {isLightboxOpen1 && (
        <Lightbox
          images={galleryImages1}
          currentIndex={currentImageIndex1}
          onClose={closeLightbox1}
          onNext={goToNext1}
          onPrev={goToPrevious1}
          onSelect={goToImage1}
        />
      )}

      {isLightboxOpen2 && (
        <Lightbox
          images={galleryImages2}
          currentIndex={currentImageIndex2}
          onClose={closeLightbox2}
          onNext={goToNext2}
          onPrev={goToPrevious2}
          onSelect={goToImage2}
        />
      )}

      {isLightboxOpen3 && (
        <Lightbox
          images={galleryImages3}
          currentIndex={currentImageIndex3}
          onClose={closeLightbox3}
          onNext={goToNext3}
          onPrev={goToPrevious3}
          onSelect={goToImage3}
        />
      )}
    </>
  );
};

export default PhotoAlbum;