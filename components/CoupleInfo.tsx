import React from 'react';

const CoupleInfo: React.FC = () => {
    return (
        <section id="couple" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-vietnamese-script text-2xl md:text-5xl text-slate-700 mb-4">
                        Chúng mình là
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
                                    <img
                                        src="/images/tuannq.gif"
                                        alt="Nguyễn Quốc Tuấn"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="text-3xl text-slate-800 mb-4">
                                <span className="font-bold">Chú rể:    </span>
                                <span className="font-script">Nguyễn Quốc Tuấn</span>
                            </h3>

                            {/* Parents Info */}
                            {/* <div className="space-y-2 mb-6 text-slate-600">
                                <p className="text-sm">
                                    <span className="font-semibold">Con bà:</span> ĐINH NGỌC LAN
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Con ông:</span> NGUYỄN QUỐC NGHỀ
                                </p>
                            </div> */}

                            {/* Description */}
                            <p className="text-slate-600 italic leading-relaxed">
                                Tốt nghiệp Tiến sĩ Tin học tại Nhật Bản, Tuấn là chàng trai trầm tính, điềm đạm nhưng luôn ấm áp và tinh tế trong cách đối đãi với mọi người.
                                Với châm ngôn “nói ít, làm nhiều”, Tuấn luôn suy nghĩ thấu đáo và tỉ mỉ trong từng hành động.
                                Sự chững chạc và trách nhiệm khiến Tuấn trở thành điểm tựa vững vàng cho những người thân yêu.
                                Hiện Tuấn là một giảng viên trẻ của Trường CNTT&TT, ĐH Bách Khoa Hà Nội.
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
                                    <img
                                        src="/images/anhptv.gif"
                                        alt="Phạm Thị Vân Anh"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="text-3xl text-slate-800 mb-4">
                                <span className="font-bold">Cô dâu: </span>
                                <span className="font-script">Phạm Thị Vân Anh</span>
                            </h3>

                            {/* Parents Info */}
                            {/* <div className="space-y-2 mb-6 text-slate-600">
                                <p className="text-sm">
                                    <span className="font-semibold">Con bà:</span> NGUYỄN THỊ THỦY
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Con ông:</span> PHẠM THANH HÀ
                                </p>
                            </div> */}

                            {/* Description */}
                            <p className="text-slate-600 italic leading-relaxed">
                                Tốt nghiệp Đại học Ngoại Thương, Vân Anh là cô gái năng động, hoạt bát và hướng ngoại.
                                Nụ cười rạng rỡ cùng nguồn năng lượng tích cực của Vân Anh luôn khiến mọi người cảm thấy vui vẻ và được tiếp thêm tinh thần.
                                Với sự tinh tế và khéo léo trong cách giao tiếp, Vân Anh dễ dàng tạo dựng sự gắn kết và thiện cảm ở bất kỳ nơi nào.
                                Hiện Vân Anh là Account Manager tại công ty công nghệ CMC-APAC, Singapore.
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
