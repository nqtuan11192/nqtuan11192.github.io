import React, { useState, useEffect, useRef } from 'react';
import { db } from '../src/firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

interface GuestbookEntry {
    id: string;
    name: string;
    message: string;
    timestamp: Date;
}

const WishNotifications: React.FC = () => {
    const [currentWish, setCurrentWish] = useState<GuestbookEntry | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const shownWishIds = useRef<Set<string>>(new Set());
    const wishQueue = useRef<GuestbookEntry[]>([]);
    const isProcessing = useRef(false);

    // Load shown wish IDs from localStorage on mount
    useEffect(() => {
        const storedIds = localStorage.getItem('shownWishIds');
        if (storedIds) {
            try {
                const idsArray = JSON.parse(storedIds);
                shownWishIds.current = new Set(idsArray);
            } catch (error) {
                console.error('Error loading shown wish IDs:', error);
            }
        }
    }, []);

    // Fetch wishes from Firestore and detect new ones
    useEffect(() => {
        const q = query(
            collection(db, 'guestbook'),
            orderBy('timestamp', 'desc'),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newWishes: GuestbookEntry[] = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const wishId = doc.id;

                // Only add wishes we haven't shown yet
                if (!shownWishIds.current.has(wishId)) {
                    newWishes.push({
                        id: wishId,
                        name: data.name,
                        message: data.message,
                        timestamp: data.timestamp?.toDate() || new Date()
                    });
                }
            });

            // Add new wishes to queue (newest first)
            if (newWishes.length > 0) {
                wishQueue.current = [...newWishes, ...wishQueue.current];
                processQueue();
            }
        });

        return () => unsubscribe();
    }, []);

    const processQueue = () => {
        if (isProcessing.current || wishQueue.current.length === 0) return;

        isProcessing.current = true;
        const nextWish = wishQueue.current.shift()!;

        // Mark as shown
        shownWishIds.current.add(nextWish.id);

        // Save to localStorage
        try {
            const idsArray = Array.from(shownWishIds.current);
            localStorage.setItem('shownWishIds', JSON.stringify(idsArray));
        } catch (error) {
            console.error('Error saving shown wish IDs:', error);
        }

        // Show the wish
        setCurrentWish(nextWish);
        setIsVisible(true);

        // Hide after 5 seconds, then process next wish
        setTimeout(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentWish(null);
                isProcessing.current = false;
                processQueue(); // Process next wish in queue
            }, 500); // Wait for fade out
        }, 5000); // Display for 5 seconds
    };

    if (!currentWish) return null;

    return (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 z-40 max-w-sm w-11/12 md:w-auto">
            <div
                className={`
                    bg-white/90 backdrop-blur-md 
                    border border-rose-200 
                    rounded-lg shadow-xl 
                    p-4
                    transition-all duration-500
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                `}
            >
                <div className="flex items-start gap-3">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                        <span className="text-rose-600 font-semibold text-lg">
                            {currentWish.name.charAt(0).toUpperCase()}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-slate-800 text-sm truncate">
                                {currentWish.name}
                            </h4>
                            <span className="text-rose-400">💕</span>
                        </div>
                        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                            {currentWish.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishNotifications;
