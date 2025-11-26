import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PhotoAlbum from './PhotoAlbum';
import WishNotifications from './WishNotifications';
import SakuraFalling from './SakuraFalling';

const PhotoAlbumPage: React.FC = () => {
    const location = useLocation();

    // Scroll to top or hash when component mounts
    useEffect(() => {
        if (location.hash) {
            // Wait a bit for the page to render before scrolling
            setTimeout(() => {
                const element = document.getElementById(location.hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-white">
            <SakuraFalling count={25} speed="medium" />
            <WishNotifications />
            {/* Back to Home Button */}
            <div className="bg-rose-50 py-6 sticky top-16 z-40 shadow-sm">
                <div className="container mx-auto px-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium transition-colors duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Quay lại trang chủ
                    </Link>
                </div>
            </div>

            {/* Photo Album Component */}
            <PhotoAlbum />
        </div>
    );
};

export default PhotoAlbumPage;
