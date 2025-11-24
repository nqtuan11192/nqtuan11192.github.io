import React, { useState } from 'react';

const RSVP: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Replace this with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdkOgEAdfTTdFkLJ_3fX9DBNdOC5Lbfw5RVf-dtRebl6Yuq0L3C-MzHVINSZAqQpyi/exec';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim()) {
            setErrorMessage('Vui lòng nhập tên, số điện thoại để xác nhận tham dự giúp chúng mình nhé!');
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.trim(),
                    phone: phone.trim(),
                    timestamp: new Date().toISOString(),
                }),
            });

            // With no-cors mode, we can't read the response, so we assume success
            setSubmitStatus('success');
            setName('');
            setPhone('');

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            setSubmitStatus('error');
            setErrorMessage('Có lỗi xảy ra. Vui lòng thử lại!');

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="rsvp" className="py-20 md:py-28 bg-gradient-to-b from-rose-50 to-white">
            <div className="container mx-auto px-6">
                {/* Header with couple photo */}
                <div className="text-center mb-12">
                    {/* Circular couple photo */}
                    <div className="mb-8 flex justify-center">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-rose-400 shadow-lg">
                            <img
                                src="/images/couple_kimono.png"
                                alt="Vân Anh & Quốc Tuấn"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="font-bold text-3xl md:text-4xl text-slate-800 mb-4 uppercase tracking-wide">
                        Xác nhận tham dự
                    </h2>
                    <p className="text-slate-600 text-lg mb-2">
                        Đám cưới của
                    </p>
                    <p className="text-slate-700 text-xl md:text-2xl font-script">
                        Vân Anh <span className="text-rose-500">💕</span> Quốc Tuấn
                    </p>
                </div>

                {/* RSVP Form */}
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Input Label */}
                        {/* <div className="text-center">
                            <p className="text-slate-700 font-medium mb-2">
                                Nhập Họ Tên và Số Điện thoại
                            </p>
                            <p className="text-slate-500 text-sm italic">
                                Type your Name and Phone Number
                            </p>
                        </div> */}

                        {/* Input Field */}
                        <div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nhập họ tên của bạn*"
                                className="w-full px-6 py-4 text-center text-lg border-2 border-slate-300 rounded-lg focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-300"
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Phone/Code Input */}
                        <div>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Nhập số điện thoại*"
                                className="w-full px-6 py-4 text-center text-lg border-2 border-slate-300 rounded-lg focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-300"
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                            <p className="text-rose-500 text-center text-sm font-medium">
                                {errorMessage}
                            </p>
                        )}

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border-2 border-green-400 rounded-lg p-4 text-center">
                                <p className="text-green-700 font-medium">
                                    ✓ Cảm ơn bạn đã xác nhận tham dự!
                                </p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Đang gửi...
                                </span>
                            ) : (
                                <>
                                    Xác nhận tham dự (RSVP)
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Decorative hearts */}
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

export default RSVP;
