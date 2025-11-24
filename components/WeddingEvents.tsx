import React, { useState } from 'react';

interface WeddingEvent {
    title: string;
    time: string;
    date: string;
    address: string;
    image: string;
    mapLink?: string;
    mapEmbed?: string;
}

const events: WeddingEvent[] = [
    {
        title: 'LỄ ĂN HỎI NHÀ GÁI',
        time: '08:00 sáng',
        date: 'Chủ nhật 21/12/2025',
        address: (<>
            Tư gia nhà gái: DNTN Hà Thuỷ Anh, Tổ dân phố Nước Mát, P. Âu Lâu, tỉnh Lào Cai<br />
            (gần nút giao IC13 cao tốc Nội Bài - Lào Cai)
        </>),
        image: '/images/HAN02209.JPG',
        mapLink: 'https://maps.app.goo.gl/duiLH6DBvrXkGXRD8',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5280.758006742002!2d104.8428742!3d21.696897000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3133455c8777a10f%3A0xca3d6e9f1102124e!2zRG9hbmggTmdoaeG7h3AgVMawIE5ow6JuIEjDgCBUSOG7plkgQU5I!5e1!3m2!1sen!2s!4v1763575119975!5m2!1sen!2s',
    },
    {
        title: 'TIỆC CƯỚI NHÀ GÁI',
        time: '11:00 trưa',
        date: 'Chủ nhật 21/12/2025',
        address: (<>
            Hội trường bến xe Nước Mát, Tổ dân phố Nước Mát, P. Âu Lâu, tỉnh Lào Cai<br />
            (gần nút giao IC13 cao tốc Nội Bài - Lào Cai)
        </>),
        image: '/images/HAN02292.JPG',
        mapLink: 'https://maps.app.goo.gl/duiLH6DBvrXkGXRD8',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5280.758006742002!2d104.8428742!3d21.696897000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3133455c8777a10f%3A0xca3d6e9f1102124e!2zRG9hbmggTmdoaeG7h3AgVMawIE5ow6JuIEjDgCBUSOG7plkgQU5I!5e1!3m2!1sen!2s!4v1763575119975!5m2!1sen!2s',
    },
    {
        title: 'LỄ  THÀNH HÔN NHÀ TRAI',
        time: '09:00 sáng',
        date: 'Thứ tư 31/12/2025',
        address: (<>
            Tư gia nhà trai: Số 5-D1, phố Hồng Quang, P. Định Công, Hà Nội<br />
            (gần trường quốc tế Reigate Grammar VN)
        </>),
        image: '/images/HAN02316.JPG',
        mapLink: 'https://maps.app.goo.gl/bHKXmZNsxPZ7Q7Vw5',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326.7090476779058!2d105.83216456965982!3d20.974301798791362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac59da230777%3A0x624697cca65ddbdd!2zUC4gSOG7k25nIFF1YW5nLCBIb8OgbmcgTWFpLCBIw6AgTuG7mWksIFZpZXRuYW0!5e1!3m2!1sen!2sus!4v1763576544631!5m2!1sen!2sus'
    },
    {
        title: 'TIỆC CƯỚI NHÀ TRAI',
        time: '11:30 trưa',
        date: 'Thứ tư 31/12/2025',
        address: (<>
            Sảnh tầng 5 Trung tâm tiệc cưới Mipec Palace, số 229 Tây Sơn, P. Kim Liên, Hà Nội<br />
            (gần Ngã Tư Sở)
        </>),
        image: '/images/HAN02325.JPG',
        mapLink: 'https://maps.app.goo.gl/SfVF5pmYJRs8u4bD9',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5305.746193351429!2d105.82437800000001!3d21.004978899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8147919f77%3A0x10224af144ebb98e!2zVHJ1bmcgdMOibSBUaeG7h2MgY8aw4bubaSAmIEjhu5lpIE5naOG7iyBNaXBlYyBQYWxhY2UgLSBUw6J5IFPGoW4!5e1!3m2!1sen!2s!4v1763575903574!5m2!1sen!2s'
    },
];

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
            <div className="p-6 text-center">
                <h3 className="font-vietnamese-script text-lg text-slate-700 mb-3 tracking-wide">
                    {event.title}
                </h3>

                <div className="flex items-center justify-center text-rose-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold">{event.time} {event.date}</span>
                </div>

                <div className="flex items-start justify-center text-slate-600 text-sm mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-left">{event.address}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                    <button className="w-full py-2 px-4 border-2 border-slate-300 text-slate-700 rounded-full hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center">
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
                        Sự Kiện Cưới
                    </h2>
                    <div className="w-24 h-0.5 bg-rose-400 mx-auto mb-4"></div>
                    <p className="text-slate-500 italic max-w-2xl mx-auto">
                        Đám cưới không phải là đích đến,<br />
                        nó là điểm khởi đầu của một hành trình mới bên nhau.
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} onShowMap={handleShowMap} />
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
