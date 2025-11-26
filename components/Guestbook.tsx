import React, { useState, useEffect } from 'react';
import { db } from '../src/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';

interface GuestbookEntry {
    id?: string;
    name: string;
    phone?: string;
    message: string;
    timestamp: Date;
}

const Guestbook: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [entries, setEntries] = useState<GuestbookEntry[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showWishSuggestions, setShowWishSuggestions] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [emojiPage, setEmojiPage] = useState(0);

    // Emoji categories for picker
    const emojiCategories = [
        { name: 'Hearts', emojis: ['💕', '❤️', '💖', '💗', '💓', '💝', '💘', '💞', '💟'] },
        { name: 'Smileys', emojis: ['😊', '😍', '🥰', '😘', '🤗', '😄', '😁', '🎉', '🎊'] },
        { name: 'Flowers', emojis: ['🌸', '🌺', '🌹', '🌷', '🌻', '💐', '🌼', '🏵️', '💮'] },
        { name: 'Celebration', emojis: ['🎂', '🍰', '🥂', '🍾', '🎁', '🎈', '🎀', '✨', '⭐'] },
        { name: 'Wedding', emojis: ['👰', '🤵', '💑', '👫', '💏', '💍', '💒', '🕊️', '🦢'] },
        { name: 'Others', emojis: ['🎶', '🎵', '🔔', '🌟', '💫', '🌈', '☀️', '🌙', '⛪'] },
    ];

    // Suggested wishes
    const suggestedWishes = [
        "Chúc mừng! Chúc hai bạn trăm năm hạnh phúc!",
        "Chúc mừng ngày trọng đại của hai bạn. Hạnh phúc bền lâu và trọn vẹn nhé!",
        "Chúc mừng hạnh phúc hai bạn. Chúc sớm có thiên thần nhỏ nhé!",
        "Gửi ngàn lời chúc hạnh phúc đến bạn tôi! Mãi hạnh phúc nhé!",
        "Chúc chị Vân Anh - anh Quốc Tuấn thiệt là hạnh phúc nhaaaaaaa Yêu thương nà <3❤️",
        "Chúc mừng hạnh phúc hai em",
        "Chúc hai bạn trăm năm hạnh phúc",
        "Chúc mừng hạnh phúc! Mãi bên nhau và yêu thương nhé! 💕",
        "Chúc hai bạn luôn hạnh phúc, yêu thương và thấu hiểu lẫn nhau. Trăm năm hạnh phúc! 🌸",
        "Chúc cô dâu chú rể trăm năm hạnh phúc, sớm có tin vui! 🎉",
        "Chúc mừng ngày vui của hai bạn! Hãy luôn giữ gìn hạnh phúc này nhé! 💑",
    ];



    // Close emoji picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            // Close emoji picker if clicking outside
            if (showEmojiPicker && !target.closest('.emoji-picker-container')) {
                setShowEmojiPicker(false);
                setEmojiPage(0);
            }

            // Close wish suggestions if clicking outside
            if (showWishSuggestions && !target.closest('.wish-suggestions-container')) {
                setShowWishSuggestions(false);
            }
        };

        if (showEmojiPicker || showWishSuggestions) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showEmojiPicker, showWishSuggestions]);

    // Real-time listener for guestbook entries
    useEffect(() => {
        const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const entriesData: GuestbookEntry[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                entriesData.push({
                    id: doc.id,
                    name: data.name,
                    phone: data.phone,
                    message: data.message,
                    timestamp: data.timestamp?.toDate() || new Date()
                });
            });
            setEntries(entriesData);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (name.trim() && message.trim()) {
            setIsSubmitting(true);

            try {
                await addDoc(collection(db, 'guestbook'), {
                    name: name.trim(),
                    phone: phone.trim() || null,
                    message: message.trim(),
                    timestamp: Timestamp.now()
                });

                // Clear form
                setName('');
                setPhone('');
                setMessage('');
            } catch (error) {
                console.error('Error adding message:', error);
                alert('Có lỗi xảy ra khi gửi lời chúc. Vui lòng thử lại!');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="guestbook" className="py-20 md:py-28 bg-rose-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-vietnamese-script text-2xl md:text-5xl text-slate-700 mb-4">
                        Sổ Lưu Bút
                    </h2>
                    <div className="flex justify-center mb-4">
                        <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-slate-600 italic max-w-2xl mx-auto">
                        Dù bạn có thể rất bận rộn hoặc không thể đến dự đám cưới của chúng mình,<br />
                        nhưng chúng mình rất mong nhận được lời chúc mừng của bạn. <br />
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Comment Form */}
                    <div className="order-2 lg:order-1">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nhập họ tên của bạn*"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border-2 border-dashed border-rose-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors disabled:opacity-50"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => {
                                        // Only allow numbers
                                        const value = e.target.value.replace(/[^0-9]/g, '');
                                        setPhone(value);
                                    }}
                                    placeholder="Nhập số điện thoại*"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border-2 border-dashed border-rose-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors disabled:opacity-50"
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="relative">
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Nhập lời chúc của bạn*"
                                    required
                                    rows={6}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border-2 border-dashed border-rose-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors resize-none disabled:opacity-50"
                                />
                                {/* Bottom row with wish suggestions (left) and emojis (right) */}
                                <div className="absolute left-4 right-4 bottom-4 flex justify-between items-center">
                                    {/* Wish Suggestions Button - Left */}
                                    <div className="relative wish-suggestions-container">
                                        <button
                                            type="button"
                                            onClick={() => setShowWishSuggestions(!showWishSuggestions)}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-rose-300 text-rose-600 rounded-lg hover:bg-rose-50 transition-colors text-xs font-medium"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                            <span className="hidden sm:inline">Gợi ý</span>
                                        </button>

                                        {/* Wish Suggestions Popover */}
                                        {showWishSuggestions && (
                                            <div className="absolute bottom-full left-0 mb-2 bg-white rounded-xl shadow-2xl border-2 border-rose-300 w-80 max-h-96 overflow-hidden z-50">
                                                {/* Header */}
                                                <div className="bg-rose-500 text-white px-4 py-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                            </svg>
                                                            <span className="font-semibold text-sm">Gợi ý lời chúc</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Wishes List */}
                                                <div className="p-3 bg-white overflow-y-auto max-h-80">
                                                    <div className="space-y-2">
                                                        {suggestedWishes.map((wish, index) => (
                                                            <button
                                                                key={index}
                                                                type="button"
                                                                onClick={() => {
                                                                    setMessage(wish);
                                                                    setShowWishSuggestions(false);
                                                                }}
                                                                className="w-full text-left px-3 py-2 bg-rose-50 hover:bg-rose-100 border border-rose-200 hover:border-rose-300 rounded-lg transition-all text-xs text-slate-700 hover:text-rose-700"
                                                            >
                                                                {wish}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Emoji Buttons - Right */}
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setMessage(message + '💕')}
                                            className="text-2xl hover:scale-125 transition-transform"
                                            title="Thêm emoji trái tim"
                                        >
                                            💕
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setMessage(message + '😊')}
                                            className="text-2xl hover:scale-125 transition-transform"
                                            title="Thêm emoji mặt cười"
                                        >
                                            😊
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setMessage(message + '🎉')}
                                            className="text-2xl hover:scale-125 transition-transform"
                                            title="Thêm emoji pháo hoa"
                                        >
                                            🎉
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setMessage(message + '🌸')}
                                            className="text-2xl hover:scale-125 transition-transform"
                                            title="Thêm emoji hoa"
                                        >
                                            🌸
                                        </button>
                                        {/* More Emojis Button */}
                                        <div className="relative emoji-picker-container">
                                            <button
                                                type="button"
                                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                                className="text-lg px-2 py-1 bg-rose-100 hover:bg-rose-200 text-rose-600 rounded transition-colors"
                                                title="More emojis"
                                            >
                                                +
                                            </button>

                                            {/* Emoji Picker Popover */}
                                            {showEmojiPicker && (
                                                <div className="absolute bottom-full right-0 mb-2 bg-white rounded-xl shadow-2xl border-2 border-rose-300 w-72 overflow-hidden z-50">
                                                    {/* Header with category navigation */}
                                                    <div className="bg-rose-500 text-white px-3 py-2 flex items-center justify-between">
                                                        <button
                                                            type="button"
                                                            onClick={() => setEmojiPage((prev) => (prev > 0 ? prev - 1 : emojiCategories.length - 1))}
                                                            className="p-1 hover:bg-rose-600 rounded transition-colors"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                            </svg>
                                                        </button>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-base">{emojiCategories[emojiPage].emojis[0]}</span>
                                                            <span className="font-semibold text-xs">{emojiCategories[emojiPage].name}</span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => setEmojiPage((prev) => (prev < emojiCategories.length - 1 ? prev + 1 : 0))}
                                                            className="p-1 hover:bg-rose-600 rounded transition-colors"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    {/* Emoji Grid */}
                                                    <div className="p-3 bg-white">
                                                        <div className="grid grid-cols-6 gap-1.5">
                                                            {emojiCategories[emojiPage].emojis.map((emoji, index) => (
                                                                <button
                                                                    key={index}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setMessage(message + emoji);
                                                                        setShowEmojiPicker(false);
                                                                    }}
                                                                    className="text-xl p-1.5 hover:bg-rose-100 rounded transition-all hover:scale-110"
                                                                >
                                                                    {emoji}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Page indicator dots */}
                                                    <div className="bg-rose-50 px-3 py-1.5 flex justify-center gap-1">
                                                        {emojiCategories.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                type="button"
                                                                onClick={() => setEmojiPage(index)}
                                                                className={`w-1.5 h-1.5 rounded-full transition-all ${index === emojiPage ? 'bg-rose-500 w-3' : 'bg-rose-300 hover:bg-rose-400'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-block bg-rose-500 text-white px-12 py-3 rounded-lg hover:bg-rose-600 transition-colors duration-200 font-semibold uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Đang gửi...' : 'Gửi Lời Chúc'}
                                </button>
                                <div className="mt-3">
                                    {/* <svg className="w-8 h-8 text-rose-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg> */}
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Comments Display */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-rose-50 border-4 border-rose-400 rounded-lg p-6 max-h-[600px] overflow-y-auto">
                            {entries.length === 0 ? (
                                <div className="text-center text-slate-500 py-8">
                                    <p>Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {entries.map((entry) => (
                                        <div key={entry.id} className="bg-white p-4 rounded-lg shadow-sm">
                                            <div className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                                                    <span className="text-rose-600 font-semibold text-lg">
                                                        {entry.name.charAt(0).toUpperCase()}
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-slate-800 mb-1">{entry.name}</h4>
                                                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
                                                        {entry.message}
                                                    </p>
                                                    <p className="text-xs text-slate-400 mt-2">
                                                        {entry.timestamp.toLocaleDateString('vi-VN', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
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
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-slate-600 italic max-w-2xl mx-auto">
                        Cảm ơn các bạn rất nhiều vì đã gửi<br />
                        những lời chúc phúc tốt đẹp nhất đến đám cưới của chúng mình!
                    </p>
                </div>
            </div>


        </section>
    );
};

export default Guestbook;
