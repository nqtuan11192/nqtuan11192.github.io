import React, { useState } from 'react';

interface WeddingEvent {
    id: string; // Unique identifier for navigation
    title: string;
    time: string;
    date: string | React.ReactElement;
    dateISO: string; // ISO format for calendar: YYYYMMDD
    startTime: string; // HH:MM format
    endTime: string; // HH:MM format
    address: string | React.ReactElement;
    addressText: string; // Plain text for calendar
    image: string;
    mapLink?: string;
    mapEmbed?: string;
    // Calendar display properties
    month: string; // Vietnamese month name
    day: string; // Day number
    dayOfWeek: string; // Vietnamese day of week
    lunarDate: string; // Lunar calendar date
}

const events: WeddingEvent[] = [
    {
        id: 'event-an-hoi-nha-gai',
        title: 'LỄ ĂN HỎI NHÀ GÁI',
        time: '08:00 sáng',
        date: (<>
            Chủ nhật 21/12/2025<br />
            (tức ngày 02 tháng 11 năm Ất Tỵ)
        </>),
        dateISO: '20251221',
        startTime: '08:00',
        endTime: '10:30',
        address: (<>
            Tư gia nhà gái: DNTN Hà Thuỷ Anh, Tổ dân phố Nước Mát, P. Âu Lâu, tỉnh Lào Cai<br />
            (gần nút giao IC13 cao tốc Nội Bài - Lào Cai)
        </>),
        addressText: 'DNTN Hà Thuỷ Anh, Tổ dân phố Nước Mát, P. Âu Lâu, tỉnh Lào Cai',
        image: '/images/album_1/HAN02814.jpg',
        mapLink: 'https://maps.app.goo.gl/duiLH6DBvrXkGXRD8',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5280.758006742002!2d104.8428742!3d21.696897000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3133455c8777a10f%3A0xca3d6e9f1102124e!2zRG9hbmggTmdoaeG7h3AgVMawIE5ow6JuIEjDgCBUSOG7plkgQU5I!5e1!3m2!1sen!2s!4v1763575119975!5m2!1sen!2s',
        month: 'Tháng 12',
        day: '21',
        dayOfWeek: 'Chủ nhật',
        lunarDate: '02/11 Ất Tỵ',
    },
    {
        id: 'event-tiec-cuoi-nha-gai',
        title: 'TIỆC CƯỚI NHÀ GÁI',
        time: '11:00 trưa',
        date: (<>
            Chủ nhật 21/12/2025<br />
            (tức ngày 02 tháng 11 năm Ất Tỵ)
        </>),
        dateISO: '20251221',
        startTime: '11:00',
        endTime: '13:30',
        address: (<>
            Hội trường bến xe Nước Mát, Tổ dân phố Nước Mát, P. Âu Lâu, tỉnh Lào Cai<br />
            (gần nút giao IC13 cao tốc Nội Bài - Lào Cai)
        </>),
        addressText: 'Hội trường bến xe Nước Mát, Tổ dân phố Nước Mát, P. Âu Lâu, tỉnh Lào Cai',
        image: '/images/album_2/DMI_5705.jpg',
        mapLink: 'https://maps.app.goo.gl/bHscUNLXYvgDECcU6',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.4964994017387!2d104.83915400569491!3d21.70056265037665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3133451727877f19%3A0xdaaae3f0ff8dff05!2zQuG6v24geGUga2jDoWNoIE7GsOG7m2MgTcOhdCAoeGUgSOG6o2kgUGjGsOG7o25nKQ!5e1!3m2!1sen!2sus!4v1764137746641!5m2!1sen!2sus',
        month: 'Tháng 12',
        day: '21',
        dayOfWeek: 'Chủ nhật',
        lunarDate: '02/11 Ất Tỵ',
    },
    {
        id: 'event-thanh-hon-nha-trai',
        title: 'LỄ  THÀNH HÔN NHÀ TRAI',
        time: '09:00 sáng',
        date: (<>
            Thứ tư 31/12/2025<br />
            (tức ngày 12 tháng 11 năm Ất Tỵ)
        </>),
        dateISO: '20251231',
        startTime: '09:00',
        endTime: '10:30',
        address: (<>
            Tư gia nhà trai: Số 5-D1, phố Hồng Quang, P. Định Công, Hà Nội<br />
            (gần trường quốc tế Reigate Grammar VN)
        </>),
        addressText: 'Số 5-D1, phố Hồng Quang, P. Định Công, Hà Nội',
        image: '/images/album_1/HAN03207.jpg',
        mapLink: 'https://maps.app.goo.gl/khX858vocK3rWLYn7',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d331.6778336031946!2d105.8328185969593!3d20.974044184243635!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1766628193937!5m2!1sen!2sus',
        month: 'Tháng 12',
        day: '31',
        dayOfWeek: 'Thứ tư',
        lunarDate: '12/11 Ất Tỵ',
    },
    {
        id: 'event-tiec-cuoi-nha-trai',
        title: 'TIỆC CƯỚI NHÀ TRAI',
        time: '11:30 trưa',
        date: (<>
            Thứ tư 31/12/2025<br />
            (tức ngày 12 tháng 11 năm Ất Tỵ)
        </>),
        dateISO: '20251231',
        startTime: '11:30',
        endTime: '13:30',
        address: (<>
            Sảnh tầng 5 Trung tâm tiệc cưới Mipec Palace, số 229 Tây Sơn, P. Kim Liên, Hà Nội<br />
            (gần Ngã Tư Sở)
        </>),
        addressText: 'Sảnh tầng 5 Trung tâm tiệc cưới Mipec Palace, số 229 Tây Sơn, P. Kim Liên, Hà Nội',
        image: '/images/album_2/DMI_3802.jpg',
        mapLink: 'https://maps.app.goo.gl/SfVF5pmYJRs8u4bD9',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5305.746193351429!2d105.82437800000001!3d21.004978899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8147919f77%3A0x10224af144ebb98e!2zVHJ1bmcgdMOibSBUaeG7h2MgY8aw4bubaSAmIEjhu5lpIE5naOG7iyBNaXBlYyBQYWxhY2UgLSBUw6J5IFPGoW4!5e1!3m2!1sen!2s!4v1763575903574!5m2!1sen!2s',
        month: 'Tháng 12',
        day: '31',
        dayOfWeek: 'Thứ tư',
        lunarDate: '12/11 Ất Tỵ',
    },
];

// Function to add event to calendar
const addToCalendar = (event: WeddingEvent) => {
    // Format: YYYYMMDDTHHmmss
    const formatTime = (time: string) => time.replace(':', '');
    const startDateTime = `${event.dateISO}T${formatTime(event.startTime)}00`;
    const endDateTime = `${event.dateISO}T${formatTime(event.endTime)}00`;

    // Create Google Calendar URL
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: `${event.title} - Vân Anh & Quốc Tuấn`,
        dates: `${startDateTime}/${endDateTime}`,
        details: `Đám cưới Vân Anh & Quốc Tuấn - ${event.title}`,
        location: event.addressText,
        trp: 'false'
    });

    const url = `https://calendar.google.com/calendar/render?${params.toString()}`;
    window.open(url, '_blank');
};

interface MapModalProps {
    isOpen: boolean;
    onClose: () => void;
    mapEmbed: string;
    title: string;
}

const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose, mapEmbed, title }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-200">
                    <h3 className="font-serif text-xl text-slate-800">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Map Container */}
                <div className="relative w-full h-[500px]">
                    <iframe
                        src={mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

interface CalendarCardProps {
    month: string;
    day: string;
    dayOfWeek: string;
    lunarDate: string;
}

const CalendarCard: React.FC<CalendarCardProps> = ({ month, day, dayOfWeek, lunarDate }) => {
    return (
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg shadow-lg p-4 text-white text-center min-w-[120px] h-full flex flex-col justify-center">
            {/* Month */}
            <div className="text-sm font-semibold uppercase tracking-wider mb-1 opacity-90">
                {month}
            </div>

            {/* Day */}
            <div className="text-6xl font-bold leading-none mb-2">
                {day}
            </div>

            {/* Day of Week */}
            <div className="text-base font-medium mb-2 opacity-90">
                {dayOfWeek}
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-white/30 mx-auto mb-2"></div>

            {/* Lunar Date */}
            <div className="text-sm opacity-80">
                {lunarDate}
            </div>
        </div>
    );
};

interface MonthCalendarProps {
    eventDate: string; // Day number to highlight (e.g., "21" or "31")
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({ eventDate }) => {
    // December 2025 calendar data
    // December 1, 2025 is a Monday (day 1 of week)
    const daysInMonth = 31;
    const firstDayOfWeek = 1; // Monday (0 = Sunday, 1 = Monday, etc.)
    const weekDays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

    // Generate calendar grid
    const calendarDays: (number | null)[] = [];

    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDayOfWeek; i++) {
        calendarDays.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(day);
    }

    const highlightDay = parseInt(eventDate);

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-2 shadow-sm h-full flex flex-col">
            {/* Month Header */}
            <div className="text-center mb-2">
                <h4 className="font-semibold text-slate-700 text-xs">Tháng 12, 2025</h4>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-0.5 mb-1">
                {weekDays.map((day, index) => (
                    <div
                        key={index}
                        className="text-center text-[10px] font-medium text-slate-500 py-0.5"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-0.5">
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`
                            text-center text-[10px] py-1 rounded
                            ${day === null ? '' : 'hover:bg-slate-50'}
                            ${day === highlightDay
                                ? 'bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold shadow-sm'
                                : day === null
                                    ? 'text-transparent'
                                    : 'text-slate-700'
                            }
                        `}
                    >
                        {day || '-'}
                    </div>
                ))}
            </div>
        </div>
    );
};

interface EventCardProps {
    event: WeddingEvent;
    onShowMap: (event: WeddingEvent) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onShowMap }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Event Image */}
            <div className="h-64 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Event Details */}
            <div className="p-6">
                {/* Title */}
                <h3 className="font-vietnamese-script text-lg text-slate-700 mb-4 tracking-wide text-center">
                    {event.title}
                </h3>

                {/* Calendar Card and Google Calendar Embed */}
                <div className="flex flex-col md:flex-row gap-4 mb-4 items-stretch">
                    {/* Calendar Card */}
                    <div className="flex-shrink-0 w-full md:w-auto min-h-[160px]">
                        <CalendarCard
                            month={event.month}
                            day={event.day}
                            dayOfWeek={event.dayOfWeek}
                            lunarDate={event.lunarDate}
                        />
                    </div>

                    {/* Custom Month Calendar */}
                    <div className="flex-1 w-full min-h-[160px]">
                        <MonthCalendar eventDate={event.day} />
                    </div>
                </div>

                {/* Time */}
                <div className="flex items-center justify-center text-rose-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">{event.time}</span>
                </div>

                {/* Address */}
                <div className="flex items-start justify-center text-slate-600 text-sm mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-left">{event.address}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                    <button
                        onClick={() => addToCalendar(event)}
                        className="w-full py-2 px-4 border-2 border-slate-300 text-slate-700 rounded-full hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Thêm vào lịch
                    </button>

                    <button
                        onClick={() => onShowMap(event)}
                        className="w-full py-2 px-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors duration-200 flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        XEM BẢN ĐỒ ›
                    </button>
                </div>
            </div>
        </div>
    );
};

const WeddingEvents: React.FC = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<WeddingEvent | null>(null);

    const handleShowMap = (event: WeddingEvent) => {
        if (event.mapEmbed) {
            setSelectedEvent(event);
            setIsMapOpen(true);
        }
    };

    const handleCloseMap = () => {
        setIsMapOpen(false);
        setSelectedEvent(null);
    };

    return (
        <section id="event" className="py-20 md:py-28 bg-rose-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-vietnamese-script text-2xl md:text-5xl text-slate-700 mb-4">
                        Thiệp Mời Cưới
                    </h2>
                    <div className="w-24 h-0.5 bg-rose-400 mx-auto mb-4"></div>
                    <p className="text-slate-500 italic max-w-2xl mx-auto text-xl">
                        Gia đình trân trọng kính mời Quý Khách
                        đến tham dự lễ Vu Quy và lễ Thành Hôn. <br />
                        Sự hiện diện của Quý Khách
                        là niềm vui và hạnh phúc của gia đình. <br />
                        <span className="text-rose-500 not-italic">💕💕💕</span> Hân hạnh được đón tiếp. <span className="text-rose-500 not-italic">💕💕💕</span>
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {events.map((event, index) => (
                        <div key={index} id={event.id}>
                            <EventCard event={event} onShowMap={handleShowMap} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Map Modal */}
            {selectedEvent && (
                <MapModal
                    isOpen={isMapOpen}
                    onClose={handleCloseMap}
                    mapEmbed={selectedEvent.mapEmbed || ''}
                    title={selectedEvent.title}
                />
            )}
        </section>
    );
};

export default WeddingEvents;
