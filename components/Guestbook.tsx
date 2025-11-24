import React, { useState, useEffect } from 'react';
import { db } from '../src/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';

interface GuestbookEntry {
    id?: string;
    name: string;
    email?: string;
    message: string;
    timestamp: Date;
}

const Guestbook: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [entries, setEntries] = useState<GuestbookEntry[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                    email: data.email,
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
                    email: email.trim() || null,
                    message: message.trim(),
                    timestamp: Timestamp.now()
                });

                // Clear form
                setName('');
                setEmail('');
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
                    <h2 className="font-script text-4xl md:text-5xl text-slate-700 mb-4">
                        Sổ Lưu Bút
                    </h2>
                    <div className="flex justify-center mb-4">
                        <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-slate-600 italic max-w-2xl mx-auto">
                        Cảm ơn bạn rất nhiều vì đã gửi<br />
                        những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng mình!
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
                                    placeholder="Nhập họ tên*"
                                    required
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border-2 border-dashed border-rose-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors disabled:opacity-50"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Nhập email"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 border-2 border-dashed border-rose-300 rounded-lg focus:outline-none focus:border-rose-400 transition-colors disabled:opacity-50"
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
                                <div className="absolute right-4 bottom-4 flex gap-2">
                                    <button type="button" className="text-slate-400 hover:text-slate-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="text-slate-400 hover:text-slate-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
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
                                    <svg className="w-8 h-8 text-rose-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
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
        </section>
    );
};

export default Guestbook;
