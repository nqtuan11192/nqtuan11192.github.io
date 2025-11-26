import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeroSlider from './HeroSlider';
import CoupleInfo from './CoupleInfo';
import Countdown from './Countdown';
import WeddingEvents from './WeddingEvents';
import OurStory from './OurStory';
import RSVP from './RSVP';
import Guestbook from './Guestbook';
import WishNotifications from './WishNotifications';

const base = import.meta.env.BASE_URL;

// Preview images for the album section
const previewImages = [
    { url: `${base}images/album_1/HAN02617.jpg`, alt: "Preview 1" },
    { url: `${base}images/album_2/DMI_3574.jpg`, alt: "Preview 2" },
    { url: `${base}images/album_1/HAN02963.jpg`, alt: "Preview 3" },
    { url: `${base}images/album_2/DMI_4575.jpg`, alt: "Preview 4" },
    { url: `${base}images/album_1/HAN02790.jpg`, alt: "Preview 5" },
    { url: `${base}images/album_2/DMI_5757.jpg`, alt: "Preview 6" },
];

const HomePage: React.FC = () => {
    const location = useLocation();

    // Scroll to top or hash when component mounts
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <WishNotifications />
            <HeroSlider />
            <CoupleInfo />
            <OurStory />

            {/* Album Preview Section */}
            <section id="album" className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="font-vietnamese-script text-2xl md:text-5xl text-slate-700 mb-4">
                            Kỷ niệm của chúng mình
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Những khoảnh khắc mà chúng mình sẽ nhớ mãi.<br />
                            Mỗi tấm hình là một phần câu chuyện trong hành trình đến bên nhau.
                        </p>
                        <div className="w-24 h-1 bg-rose-300 mx-auto mt-4"></div>
                    </div>

                    {/* Preview Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                        {previewImages.map((image, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-xl shadow-md aspect-square"
                            >
                                <img
                                    src={image.url}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>

                    {/* View Full Album Button */}
                    <div className="text-center">
                        <Link
                            to="/album"
                            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Xem toàn bộ album
                        </Link>
                        {/* <p className="text-slate-400 text-sm mt-3">
                            Hơn 100 khoảnh khắc đẹp đang chờ bạn khám phá
                        </p> */}
                    </div>
                </div>
            </section>

            <Countdown />
            <WeddingEvents />
            <RSVP />
            <Guestbook />
        </>
    );
};

export default HomePage;
