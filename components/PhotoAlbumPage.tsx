import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PhotoAlbum from './PhotoAlbum';

const PhotoAlbumPage: React.FC = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
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
