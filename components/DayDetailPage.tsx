import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events, getEventStatus } from '../src/data/events';

interface TimelineItemProps {
    time: string;
    title: string;
    isHappening: boolean;
    isCompleted: boolean;
    isLast: boolean;
}

const TimelineNode: React.FC<TimelineItemProps> = ({ time, title, isHappening, isCompleted, isLast }) => {
    return (
        <li className="relative pl-8 sm:pl-32 py-6 group">
            {/* Connector Line */}
            {!isLast && (
                <div
                    className={`
                        absolute left-3 sm:left-[7.5rem] top-8 bottom-0 w-0.5 
                        ${isCompleted ? 'bg-rose-200' : 'bg-slate-200'} 
                        group-hover:bg-rose-300 transition-colors
                    `}
                />
            )}

            {/* Time Label (Desktop) */}
            <div className={`
                hidden sm:flex flex-col items-end absolute left-0 w-24 top-6 text-right pr-8
                ${isHappening ? 'text-rose-600 font-bold scale-110' : 'text-slate-500'}
                transition-all duration-300
            `}>
                <span className="text-xl font-serif leading-none">{time}</span>
                {isHappening && <span className="text-[10px] bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full mt-1 animate-pulse">LIVE</span>}
            </div>

            {/* Node Circle */}
            <div
                className={`
                    absolute left-1.5 sm:left-[7.15rem] top-7 w-3.5 h-3.5 rounded-full border-2 z-10 box-content
                    ${isHappening
                        ? 'bg-rose-500 border-rose-200 ring-4 ring-rose-100'
                        : isCompleted
                            ? 'bg-rose-200 border-rose-100'
                            : 'bg-white border-slate-300'
                    }
                    transition-all duration-300
                `}
            />

            {/* Content Card */}
            <div className={`
                flex flex-col sm:flex-row gap-4 items-start
                p-4 rounded-xl border transition-all duration-300
                ${isHappening
                    ? 'bg-white border-rose-200 shadow-lg ring-1 ring-rose-100 transform translate-x-2'
                    : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-md'
                }
            `}>
                {/* Time (Mobile) */}
                <div className="sm:hidden flex items-baseline gap-2 mb-1">
                    <span className={`text-lg font-serif font-bold ${isHappening ? 'text-rose-600' : 'text-slate-700'}`}>
                        {time}
                    </span>
                    {isHappening && <span className="text-[10px] bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-full animate-pulse">Đang diễn ra</span>}
                </div>

                <div className="flex-1">
                    <h3 className={`text-lg font-medium mb-1 ${isHappening ? 'text-slate-900' : 'text-slate-700'}`}>
                        {title}
                    </h3>
                </div>
            </div>
        </li>
    );
};

const DayDetailPage: React.FC = () => {
    const { side } = useParams<{ side: string }>();
    const navigate = useNavigate();
    const [now, setNow] = useState(new Date());

    // Update time for live status
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Determine filter date based on side
    const targetDateISO = side === 'nhagai' ? '20251221' : (side === 'nhatrai' ? '20251231' : '');

    // Filter events for the selected day
    const dayEvents = events.filter(e => e.dateISO === targetDateISO);

    if (dayEvents.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-rose-50">
                <div className="text-center">
                    <h2 className="text-2xl font-serif text-slate-700 mb-4">Không tìm thấy sự kiện</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-rose-600 hover:text-rose-700 hover:underline"
                    >
                        Quay lại trang chủ
                    </button>
                </div>
            </div>
        );
    }

    const firstEvent = dayEvents[0];
    // Combine all timeline items from all events of the day
    // This assumes events are already sorted by time in the main array, or we simply concat them.
    // Ideally, we'd sort based on start time.
    const allTimelineItems = dayEvents.flatMap(event =>
        (event.timeline || []).map(item => ({
            ...item,
            parentEvent: event
        }))
    ).sort((a, b) => a.time.localeCompare(b.time));

    return (
        <div className="min-h-screen bg-rose-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center text-slate-500 hover:text-rose-600 transition-colors mb-6"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Quay lại
                    </button>

                    <h1 className="font-vietnamese-script text-4xl md:text-5xl text-slate-800 mb-2">
                        Lịch Trình Chi Tiết
                    </h1>
                    <p className="text-xl font-serif text-rose-600">
                        {firstEvent.dayOfWeek}, ngày {firstEvent.day} {firstEvent.month} năm 2025
                    </p>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
                    <ul className="relative">
                        {allTimelineItems.map((item, idx) => {
                            // Determine status for this specific timeline item
                            // This is a simplified check. A robust one compares item time vs 'now'.
                            // Reusing logic from `getEventStatus` but granularly for items might be complex.
                            // For simplicity, we check if the parent event is 'happening' AND if this item is strictly current?
                            // Actually, let's just use the parent event status for broad highlighting,
                            // or implement a granular Time vs Item.time check.

                            // Let's implement a simple granular check:
                            const [hours, minutes] = item.time.split(':').map(Number);
                            const itemTime = new Date(now); // Clone today
                            // We need to set the date to the EVENT's date
                            // dateISO is usually YYYYMMDD
                            const year = parseInt(firstEvent.dateISO.substring(0, 4));
                            const month = parseInt(firstEvent.dateISO.substring(4, 6)) - 1;
                            const day = parseInt(firstEvent.dateISO.substring(6, 8));

                            itemTime.setFullYear(year, month, day);
                            itemTime.setHours(hours, minutes, 0, 0);

                            // Status logic:
                            // If now > itemTime + 30mins -> completed
                            // If now >= itemTime && now < itemTime + 30mins -> happening? 
                            // This is arbitrary. Let's just stick to "passed" vs "upcoming".

                            // Better yet, revert to simple visual style.
                            // We highlight the whole parent event block if it's happening?
                            // Or just highlight the item if it's "now".

                            // Check if passed:
                            const isPassed = now > itemTime; // True if current time is after item time
                            // Check if "current" window (e.g. within last hour?)
                            // Let's rely on the simple generic styling for now.

                            const parentStatus = getEventStatus(item.parentEvent, now);
                            // Highlight if parent event is happening?? 
                            // No, let's keep it clean.

                            return (
                                <TimelineNode
                                    key={idx}
                                    time={item.time}
                                    title={item.title}
                                    isHappening={parentStatus === 'happening' && !isPassed && (now.getTime() - itemTime.getTime() > -3600000)} // Rough "upcoming soon" or "just started" logic? Too complex.
                                    // Let's just use simple logic:
                                    isCompleted={isPassed}
                                    isLast={idx === allTimelineItems.length - 1}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DayDetailPage;
