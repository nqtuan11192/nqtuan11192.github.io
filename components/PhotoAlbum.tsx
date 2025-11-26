import React, { useState } from 'react';
import Lightbox from './Lightbox';

const base = import.meta.env.BASE_URL

// const galleryImages1 = [
//   { id: 0, url: `${base}images/HAN02209.JPG`, alt: 'I can conquer the world with one hand, as long as you are holding the other.' },
//   { id: 1, url: `${base}images/HAN02292.JPG`, alt: 'Together is our favorite place to be.' },
//   { id: 2, url: `${base}images/HAN02316.JPG`, alt: 'Together is our favorite place to be.' },
//   { id: 3, url: `${base}images/HAN02438.JPG`, alt: 'Every love story is beautiful, but ours is my favorite.' },
//   { id: 4, url: `${base}images/HAN02486.JPG`, alt: 'Walking side-by-side into our forever.' },
//   { id: 5, url: `${base}images/HAN02510.JPG`, alt: 'You are my today and all of my tomorrows.' },
//   { id: 6, url: `${base}images/HAN02613.JPG`, alt: 'A quiet moment, a lifetime of love.' },
//   { id: 7, url: `${base}images/HAN02641.JPG`, alt: 'Finding paradise wherever you are.' },
//   { id: 8, url: `${base}images/HAN02686.JPG`, alt: 'The best things in life are better with you.' },
//   { id: 9, url: `${base}images/HAN02886.JPG`, alt: 'The best things in life are better with you.' },
//   { id: 10, url: `${base}images/HAN02915.JPG`, alt: 'A glance, a smile, a love story unfolds.' },
//   { id: 11, url: `${base}images/HAN02927.JPG`, alt: 'Two hearts, one journey.' },
//   { id: 12, url: `${base}images/HAN03231.JPG`, alt: 'Two hearts, one journey.' },
//   { id: 13, url: `${base}images/HAN03279.JPG`, alt: 'Lost in your eyes and the beauty of this moment.' },
// ]
const galleryImages1 = [
  { id: 0, url: `${base}images/album_1/HAN02210.jpg`, alt: "Image HAN02210" },
  { id: 1, url: `${base}images/album_1/HAN02267.jpg`, alt: "Image HAN02267" },
  { id: 2, url: `${base}images/album_1/HAN02296.jpg`, alt: "Image HAN02296" },
  { id: 3, url: `${base}images/album_1/HAN02313.jpg`, alt: "Image HAN02313" },
  { id: 4, url: `${base}images/album_1/HAN02325.jpg`, alt: "Image HAN02325" },
  { id: 5, url: `${base}images/album_1/HAN02427.jpg`, alt: "Image HAN02427" },
  { id: 6, url: `${base}images/album_1/HAN02436.jpg`, alt: "Image HAN02436" },
  { id: 7, url: `${base}images/album_1/HAN02452.jpg`, alt: "Image HAN02452" },
  { id: 8, url: `${base}images/album_1/HAN02473.jpg`, alt: "Image HAN02473" },
  { id: 9, url: `${base}images/album_1/HAN02565.jpg`, alt: "Image HAN02565" },

  { id: 10, url: `${base}images/album_1/HAN02586.jpg`, alt: "Image HAN02586" },
  // { id: 11, url: `${base}images/album_1/HAN02617.jpg`, alt: "Image HAN02617" },
  { id: 12, url: `${base}images/album_1/HAN02641.jpg`, alt: "Image HAN02641" },
  { id: 13, url: `${base}images/album_1/HAN02686.jpg`, alt: "Image HAN02686" },
  { id: 14, url: `${base}images/album_1/HAN02714.jpg`, alt: "Image HAN02714" },
  { id: 15, url: `${base}images/album_1/HAN02715.jpg`, alt: "Image HAN02715" },
  { id: 16, url: `${base}images/album_1/HAN02719.jpg`, alt: "Image HAN02719" },
  { id: 17, url: `${base}images/album_1/HAN02726.jpg`, alt: "Image HAN02726" },
  { id: 18, url: `${base}images/album_1/HAN02743.jpg`, alt: "Image HAN02743" },
  { id: 19, url: `${base}images/album_1/HAN02744.jpg`, alt: "Image HAN02744" },

  { id: 20, url: `${base}images/album_1/HAN02790.jpg`, alt: "Image HAN02790" },
  { id: 21, url: `${base}images/album_1/HAN02796.jpg`, alt: "Image HAN02796" },
  { id: 22, url: `${base}images/album_1/HAN02814.jpg`, alt: "Image HAN02814" },
  { id: 23, url: `${base}images/album_1/HAN02872.jpg`, alt: "Image HAN02872" },
  { id: 24, url: `${base}images/album_1/HAN02892.jpg`, alt: "Image HAN02892" },
  { id: 25, url: `${base}images/album_1/HAN02910.jpg`, alt: "Image HAN02910" },
  { id: 26, url: `${base}images/album_1/HAN02917.jpg`, alt: "Image HAN02917" },
  { id: 27, url: `${base}images/album_1/HAN02963.jpg`, alt: "Image HAN02963" },
  { id: 28, url: `${base}images/album_1/HAN02967.jpg`, alt: "Image HAN02967" },
  { id: 29, url: `${base}images/album_1/HAN02993.jpg`, alt: "Image HAN02993" },

  { id: 30, url: `${base}images/album_1/HAN03001.jpg`, alt: "Image HAN03001" },
  { id: 31, url: `${base}images/album_1/HAN03052.jpg`, alt: "Image HAN03052" },
  { id: 32, url: `${base}images/album_1/HAN03061.jpg`, alt: "Image HAN03061" },
  { id: 33, url: `${base}images/album_1/HAN03119.jpg`, alt: "Image HAN03119" },
  { id: 34, url: `${base}images/album_1/HAN03162.jpg`, alt: "Image HAN03162" },
  { id: 35, url: `${base}images/album_1/HAN03183.jpg`, alt: "Image HAN03183" },
  { id: 36, url: `${base}images/album_1/HAN03207.jpg`, alt: "Image HAN03207" },
  { id: 37, url: `${base}images/album_1/HAN03231.jpg`, alt: "Image HAN03231" },
  { id: 38, url: `${base}images/album_1/HAN03264.jpg`, alt: "Image HAN03264" },
  { id: 39, url: `${base}images/album_1/HAN03279.jpg`, alt: "Image HAN03279" },
];



// Second gallery - you can add different images here
const galleryImages2 = [
  { id: 0, url: `${base}images/album_2/DMI_1726.jpg`, alt: "Image DMI_1726" },
  { id: 1, url: `${base}images/album_2/DMI_1856.jpg`, alt: "Image DMI_1856" },
  { id: 2, url: `${base}images/album_2/DMI_1868.jpg`, alt: "Image DMI_1868" },
  { id: 3, url: `${base}images/album_2/DMI_2496.jpg`, alt: "Image DMI_2496" },
  { id: 4, url: `${base}images/album_2/DMI_2877.jpg`, alt: "Image DMI_2877" },
  { id: 5, url: `${base}images/album_2/DMI_2923.jpg`, alt: "Image DMI_2923" },
  { id: 6, url: `${base}images/album_2/DMI_3001.jpg`, alt: "Image DMI_3001" },
  { id: 7, url: `${base}images/album_2/DMI_3044.jpg`, alt: "Image DMI_3044" },
  { id: 8, url: `${base}images/album_2/DMI_3574.jpg`, alt: "Image DMI_3574" },
  { id: 9, url: `${base}images/album_2/DMI_3802.jpg`, alt: "Image DMI_3802" },

  { id: 10, url: `${base}images/album_2/DMI_4090.jpg`, alt: "Image DMI_4090" },
  { id: 11, url: `${base}images/album_2/DMI_4092.jpg`, alt: "Image DMI_4092" },
  { id: 12, url: `${base}images/album_2/DMI_4152.jpg`, alt: "Image DMI_4152" },
  { id: 13, url: `${base}images/album_2/DMI_4269.jpg`, alt: "Image DMI_4269" },
  { id: 14, url: `${base}images/album_2/DMI_4365.jpg`, alt: "Image DMI_4365" },
  { id: 15, url: `${base}images/album_2/DMI_4387.jpg`, alt: "Image DMI_4387" },
  { id: 16, url: `${base}images/album_2/DMI_4544.jpg`, alt: "Image DMI_4544" },
  { id: 17, url: `${base}images/album_2/DMI_4575.jpg`, alt: "Image DMI_4575" },
  { id: 18, url: `${base}images/album_2/DMI_4604.JPG`, alt: "Image DMI_4604" },   // NEW
  { id: 19, url: `${base}images/album_2/DMI_4696.jpg`, alt: "Image DMI_4696" },

  { id: 20, url: `${base}images/album_2/DMI_4831.jpg`, alt: "Image DMI_4831" },
  { id: 21, url: `${base}images/album_2/DMI_4904.jpg`, alt: "Image DMI_4904" },
  { id: 22, url: `${base}images/album_2/DMI_4922.JPG`, alt: "Image DMI_4922" },  // NEW
  { id: 23, url: `${base}images/album_2/DMI_4967.jpg`, alt: "Image DMI_4967" },
  { id: 24, url: `${base}images/album_2/DMI_4987.jpg`, alt: "Image DMI_4987" },
  { id: 25, url: `${base}images/album_2/DMI_5099.jpg`, alt: "Image DMI_5099" },
  { id: 26, url: `${base}images/album_2/DMI_5230.jpg`, alt: "Image DMI_5230" },
  { id: 27, url: `${base}images/album_2/DMI_5303.jpg`, alt: "Image DMI_5303" },
  { id: 28, url: `${base}images/album_2/DMI_5435.jpg`, alt: "Image DMI_5435" },
  { id: 29, url: `${base}images/album_2/DMI_5463.jpg`, alt: "Image DMI_5463" },

  { id: 30, url: `${base}images/album_2/DMI_5705.jpg`, alt: "Image DMI_5705" },
  { id: 31, url: `${base}images/album_2/DMI_5757.jpg`, alt: "Image DMI_5757" },
  { id: 32, url: `${base}images/album_2/DMI_5874.jpg`, alt: "Image DMI_5874" },
  { id: 33, url: `${base}images/album_2/DMI_5930.jpg`, alt: "Image DMI_5930" },
  { id: 34, url: `${base}images/album_2/DMI_5938.jpg`, alt: "Image DMI_5938" },
  { id: 35, url: `${base}images/album_2/DMI_6184.jpg`, alt: "Image DMI_6184" },
];



// Third gallery
const galleryImages3 = [
  { id: 0, url: `${base}images/album_3/IMG_0118.jpg`, alt: "Image IMG_0118" },
  { id: 1, url: `${base}images/album_3/IMG_0215.jpg`, alt: "Image IMG_0215" },
  { id: 2, url: `${base}images/album_3/IMG_0420.jpg`, alt: "Image IMG_0420" },
  { id: 3, url: `${base}images/album_3/IMG_0445.jpg`, alt: "Image IMG_0445" },
  { id: 4, url: `${base}images/album_3/IMG_0476.jpg`, alt: "Image IMG_0476" },
  { id: 5, url: `${base}images/album_3/IMG_0499.jpg`, alt: "Image IMG_0499" },
  { id: 6, url: `${base}images/album_3/IMG_0507.jpg`, alt: "Image IMG_0507" },
  { id: 7, url: `${base}images/album_3/IMG_0520.jpg`, alt: "Image IMG_0520" },
  { id: 8, url: `${base}images/album_3/IMG_0563.jpg`, alt: "Image IMG_0563" },
  { id: 9, url: `${base}images/album_3/IMG_0656.jpg`, alt: "Image IMG_0656" },

  { id: 10, url: `${base}images/album_3/IMG_0683.jpg`, alt: "Image IMG_0683" },
  { id: 11, url: `${base}images/album_3/IMG_0717.jpg`, alt: "Image IMG_0717" },
  { id: 12, url: `${base}images/album_3/IMG_0993.jpg`, alt: "Image IMG_0993" },
  { id: 13, url: `${base}images/album_3/IMG_1071.jpg`, alt: "Image IMG_1071" },
  { id: 14, url: `${base}images/album_3/IMG_1545.jpg`, alt: "Image IMG_1545" },
  { id: 15, url: `${base}images/album_3/IMG_1554.jpg`, alt: "Image IMG_1554" },
  { id: 16, url: `${base}images/album_3/IMG_1601.jpg`, alt: "Image IMG_1601" },
  { id: 17, url: `${base}images/album_3/IMG_1824.jpg`, alt: "Image IMG_1824" },
  { id: 18, url: `${base}images/album_3/IMG_2026.jpg`, alt: "Image IMG_2026" },
  { id: 19, url: `${base}images/album_3/IMG_2326.jpg`, alt: "Image IMG_2326" },

  { id: 20, url: `${base}images/album_3/IMG_2349.jpg`, alt: "Image IMG_2349" },
  { id: 21, url: `${base}images/album_3/IMG_2578.jpg`, alt: "Image IMG_2578" },
  { id: 22, url: `${base}images/album_3/IMG_2760.jpg`, alt: "Image IMG_2760" },
  { id: 23, url: `${base}images/album_3/IMG_2810.jpg`, alt: "Image IMG_2810" },
  { id: 24, url: `${base}images/album_3/IMG_2839.jpg`, alt: "Image IMG_2839" },
  { id: 25, url: `${base}images/album_3/IMG_2840.jpg`, alt: "Image IMG_2840" },
  { id: 26, url: `${base}images/album_3/IMG_2907.jpg`, alt: "Image IMG_2907" },
  { id: 27, url: `${base}images/album_3/IMG_2920.jpg`, alt: "Image IMG_2920" },
  { id: 28, url: `${base}images/album_3/IMG_2923.jpg`, alt: "Image IMG_2923" },
  { id: 29, url: `${base}images/album_3/IMG_4913.jpg`, alt: "Image IMG_4913" },

  { id: 30, url: `${base}images/album_3/IMG_5344.jpg`, alt: "Image IMG_5344" },
  { id: 31, url: `${base}images/album_3/IMG_5347.jpg`, alt: "Image IMG_5347" },
  { id: 32, url: `${base}images/album_3/IMG_5417.jpg`, alt: "Image IMG_5417" },
  { id: 33, url: `${base}images/album_3/IMG_5499.jpg`, alt: "Image IMG_5499" },
  { id: 34, url: `${base}images/album_3/IMG_5797.jpg`, alt: "Image IMG_5797" },
  { id: 35, url: `${base}images/album_3/IMG_6009.jpg`, alt: "Image IMG_6009" },
  { id: 36, url: `${base}images/album_3/IMG_6097.jpg`, alt: "Image IMG_6097" },
  { id: 37, url: `${base}images/album_3/IMG_6784.jpg`, alt: "Image IMG_6784" },
  { id: 38, url: `${base}images/album_3/IMG_7167.jpg`, alt: "Image IMG_7167" },
  { id: 39, url: `${base}images/album_3/IMG_7266.jpg`, alt: "Image IMG_7266" },

  { id: 40, url: `${base}images/album_3/IMG_7420.jpg`, alt: "Image IMG_7420" },
];

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