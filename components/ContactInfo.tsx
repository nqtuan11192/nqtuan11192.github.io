import React, { useState } from 'react';

interface FamilyContact {
    label: string;
    name: string;
    phone: string;
}

const ContactInfo: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Listen for custom event from FloatingMenu
    React.useEffect(() => {
        const handleOpenContactInfo = () => {
            setIsModalOpen(true);
        };

        window.addEventListener('openContactInfo', handleOpenContactInfo);

        return () => {
            window.removeEventListener('openContactInfo', handleOpenContactInfo);
        };
    }, []);

    const brideFamily: FamilyContact[] = [
        { label: 'Ông:', name: 'Phạm Thanh Hà', phone: '0984790441' },
        { label: 'Bà:', name: 'Nguyễn Thị Thủy', phone: '0985426522' },
        { label: 'Cô dâu:', name: 'Phạm Thị Vân Anh', phone: '0977035081' },
        { label: 'Điều phối:', name: '', phone: '09xxxxxxxx' }
    ];

    const groomFamily: FamilyContact[] = [
        { label: 'Ông:', name: 'Nguyễn Quốc Nghề', phone: '0902468397' },
        { label: 'Bà:', name: 'Đinh Ngọc Lan', phone: '0868484395' },
        { label: 'Chú rể:', name: 'Nguyễn Quốc Tuấn', phone: '0397775933' },
        { label: 'Điều phối:', name: '', phone: '09xxxxxxxx' }
    ];

    return (
        <>


            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-rose-50 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <h2 className="font-vietnamese-script text-2xl md:text-4xl">
                                    Thông Tin Liên Hệ
                                </h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {/* Bride's Family */}
                                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-rose-100">
                                    <h4 className="font-serif text-xl text-rose-600 mb-4 uppercase tracking-wider">Nhà Gái</h4>
                                    <div className="space-y-2 text-slate-600">
                                        {brideFamily.map((contact, index) => (
                                            <div key={index} className="flex justify-between items-center font-medium text-sm md:text-base">
                                                <span className="text-left">
                                                    {contact.label} {contact.name}
                                                </span>
                                                <a
                                                    href={`tel:${contact.phone}`}
                                                    className="inline-flex items-center text-rose-500 hover:text-rose-600 transition-colors ml-2 flex-shrink-0"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <span className="text-xs md:text-sm">{contact.phone.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1.$2.$3')}</span>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Groom's Family */}
                                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-rose-100">
                                    <h4 className="font-serif text-xl text-rose-600 mb-4 uppercase tracking-wider">Nhà Trai</h4>
                                    <div className="space-y-2 text-slate-600">
                                        {groomFamily.map((contact, index) => (
                                            <div key={index} className="flex justify-between items-center font-medium text-sm md:text-base">
                                                <span className="text-left">
                                                    {contact.label} {contact.name}
                                                </span>
                                                <a
                                                    href={`tel:${contact.phone}`}
                                                    className="inline-flex items-center text-rose-500 hover:text-rose-600 transition-colors ml-2 flex-shrink-0"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <span className="text-xs md:text-sm">{contact.phone.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1.$2.$3')}</span>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <div className="inline-flex items-center gap-2 text-rose-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-slate-600 italic font-vietnamese-script text-xl">
                                        Rất mong nhận được sự phản hồi từ Quý Khách
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
        </>
    );
};

export default ContactInfo;
