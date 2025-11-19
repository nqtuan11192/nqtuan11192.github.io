import React from 'react';

const CoupleInfo: React.FC = () => {
    return (
        <section id="couple" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-script text-4xl md:text-5xl text-slate-700 mb-4">
                        Cặp Đôi
                    </h2>
                    <div className="flex justify-center mb-4">
                        <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* Couple Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {/* Groom Card */}
                    <div className="bg-rose-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                            {/* Photo */}
                            <div className="mb-6 flex justify-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="font-script text-3xl text-slate-800 mb-4">
                                Nguyễn Quốc Tuấn
                            </h3>

                            {/* Parents Info */}
                            <div className="space-y-2 mb-6 text-slate-600">
                                <p className="text-sm">
                                    <span className="font-semibold">Con bà:</span> ĐINH NGỌC LAN
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Con ông:</span> NGUYỄN QUỐC NGHỀ
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 italic leading-relaxed">
                                Là một chàng trai
                            </p>

                            {/* View More Link
                            <a href="#story" className="inline-block mt-4 text-rose-500 hover:text-rose-600 font-medium transition-colors">
                                Xem thêm →
                            </a> */}
                        </div>
                    </div>

                    {/* Bride Card */}
                    <div className="bg-rose-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-center">
                            {/* Photo */}
                            <div className="mb-6 flex justify-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="font-script text-3xl text-slate-800 mb-4">
                                Phạm Thị Vân Anh
                            </h3>

                            {/* Parents Info */}
                            <div className="space-y-2 mb-6 text-slate-600">
                                <p className="text-sm">
                                    <span className="font-semibold">Con bà:</span> NGUYỄN THỊ THỦY
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Con ông:</span> PHẠM THANH HÀ
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 italic leading-relaxed">
                                Là một cô gái
                            </p>

                            {/* View More Link
                            <a href="#story" className="inline-block mt-4 text-rose-500 hover:text-rose-600 font-medium transition-colors">
                                Xem thêm →
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Decoration */}
                <div className="mt-12 flex justify-center gap-2">
                    <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default CoupleInfo;
