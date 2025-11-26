import React, { useState, useEffect } from 'react';

interface BankingInfo {
    name: string;
    accountName: string;
    accountNumber: string;
    bank: string;
    qrCode: string;
}

const GiftBox: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullSizeQR, setFullSizeQR] = useState<string | null>(null);

    // Listen for custom event from header
    useEffect(() => {
        const handleOpenGiftBox = () => {
            setIsModalOpen(true);
        };

        window.addEventListener('openGiftBox', handleOpenGiftBox);

        return () => {
            window.removeEventListener('openGiftBox', handleOpenGiftBox);
        };
    }, []);

    const brideInfo: BankingInfo = {
        name: 'Chú Rể',
        accountName: 'NGUYỄN QUỐC TUẤN',
        accountNumber: '0011004227514',
        bank: 'Vietcombank',
        qrCode: '/images/qr_tuannq.png'
    };

    const groomInfo: BankingInfo = {
        name: 'Cô Dâu',
        accountName: 'PHẠM THỊ VÂN ANH',
        accountNumber: '19034256497789',
        bank: 'Techcombank',
        qrCode: '/images/qr_anhptv.png'
    };

    const handleQRClick = (qrCode: string) => {
        setFullSizeQR(qrCode);
    };

    const closeFullSizeQR = () => {
        setFullSizeQR(null);
    };

    return (
        <>
            {/* Floating Gift Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-8 right-8 z-40 bg-rose-500 hover:bg-rose-600 text-white p-1 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
                aria-label="Hộp mừng cưới"
            >
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </span>
                </div>
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Mừng cưới
                </span>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-rose-500 text-white p-6 rounded-t-2xl relative">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white hover:text-rose-100 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="flex items-center justify-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                                <h2 className="font-vietnamese-script md:text-4xl mb-1">

                                    Hộp mừng cưới</h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            <p className="text-center font-verdana text-slate-600 mb-8 italic text-xl">
                                Thật hạnh phúc khi được chia sẻ niềm vui cùng bạn trong ngày trọng đại này!
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Bride Card */}
                                <div className="border-4 border-rose-400 rounded-xl p-6 bg-rose-50">
                                    <h3 className="text-xl font-bold text-center text-slate-800 mb-4">
                                        Mừng Cưới Đến {groomInfo.name}
                                    </h3>

                                    {/* QR Code */}
                                    <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
                                        <img
                                            src={groomInfo.qrCode}
                                            alt={`QR Code ${groomInfo.name}`}
                                            className="w-64 h-64 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                            onClick={() => handleQRClick(groomInfo.qrCode)}
                                            title="Click để xem kích thước đầy đủ"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <div className="hidden w-64 h-64 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg flex items-center justify-center border-2 border-rose-300">
                                            <div className="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-rose-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                                </svg>
                                                <p className="text-sm text-slate-500">QR Code</p>
                                                {/* <p className="text-xs text-slate-400 mt-1">Thêm ảnh QR vào<br />/public/images/qr_tuannq.png</p> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-center">
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Ngân hàng:</span> {groomInfo.bank}
                                        </p>
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Tên tài khoản:</span> {groomInfo.accountName}
                                        </p>
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Số tài khoản:</span> {groomInfo.accountNumber}
                                        </p>
                                    </div>
                                </div>

                                {/* Groom Card */}
                                <div className="border-4 border-rose-400 rounded-xl p-6 bg-rose-50">
                                    <h3 className="text-xl font-bold text-center text-slate-800 mb-4">
                                        Mừng Cưới Đến {brideInfo.name}
                                    </h3>

                                    {/* QR Code */}
                                    <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
                                        <img
                                            src={brideInfo.qrCode}
                                            alt={`QR Code ${brideInfo.name}`}
                                            className="w-64 h-64 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                                            onClick={() => handleQRClick(brideInfo.qrCode)}
                                            title="Click để xem kích thước đầy đủ"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <div className="hidden w-64 h-64 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg flex items-center justify-center border-2 border-rose-300">
                                            <div className="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-rose-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                                </svg>
                                                <p className="text-sm text-slate-500">QR Code</p>
                                                {/* <p className="text-xs text-slate-400 mt-1">Thêm ảnh QR vào<br />/public/images/qr_tuannq.png</p> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-center">
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Ngân hàng:</span> {brideInfo.bank}
                                        </p>
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Tên tài khoản:</span> {brideInfo.accountName}
                                        </p>
                                        <p className="text-slate-700">
                                            <span className="font-semibold">Số tài khoản:</span> {brideInfo.accountNumber}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <div className="inline-flex items-center gap-2 text-rose-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-slate-600 italic font-vietnamese-script text-xl">
                                        Trân trọng cảm ơn bạn rất nhiều!
                                    </p>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Full Size QR Code Modal */}
            {fullSizeQR && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm"
                    onClick={closeFullSizeQR}
                >
                    <div className="relative max-w-2xl w-full">
                        {/* Close Button */}
                        <button
                            onClick={closeFullSizeQR}
                            className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* QR Code Image */}
                        <div className="bg-white p-8 rounded-2xl shadow-2xl">
                            <img
                                src={fullSizeQR}
                                alt="QR Code Full Size"
                                className="w-full h-auto object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <p className="text-center text-slate-600 mt-4 text-sm">
                                Click bên ngoài để đóng
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default GiftBox;
