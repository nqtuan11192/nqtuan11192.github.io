
import React from 'react';

export interface TimelineItem {
    time: string;
    title: string;
}

export type EventStatus = 'upcoming' | 'happening' | 'completed';

export interface WeddingEvent {
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
    timeline?: TimelineItem[]; // Schedule of events
}

export const events: WeddingEvent[] = [
    {
        id: 'event-an-hoi-nha-gai',
        title: 'LỄ ĂN HỎI NHÀ GÁI',
        time: '08:00 sáng',
        date: (<>
            Chủ nhật 21/12/2025 < br />
            (tức ngày 02 tháng 11 năm Ất Tỵ)
        </>),
        dateISO: '20251221',
        startTime: '08:00',
        endTime: '10:30',
        address: (<>
            Tư gia nhà gái: DNTN Hà Thuỷ Anh, Tổ dân phố Nước Mát, P.Âu Lâu, tỉnh Lào Cai < br />
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
        timeline: [
            { time: '08:00', title: 'Nhà trai đến' },
            { time: '08:15', title: 'Trao lễ vật & Phát biểu' },
            { time: '09:00', title: 'Mời nước & Chụp ảnh' },
            { time: '10:00', title: 'Hoàn tất lễ ăn hỏi' }
        ]
    },
    {
        id: 'event-tiec-cuoi-nha-gai',
        title: 'TIỆC CƯỚI NHÀ GÁI',
        time: '11:00 trưa',
        date: (<>
            Chủ nhật 21 / 12 / 2025 < br />
            (tức ngày 02 tháng 11 năm Ất Tỵ)
        </>),
        dateISO: '20251221',
        startTime: '11:00',
        endTime: '13:30',
        address: (<>
            Hội trường bến xe Nước Mát, Tổ dân phố Nước Mát, P.Âu Lâu, tỉnh Lào Cai < br />
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
        timeline: [
            { time: '11:00', title: 'Đón khách' },
            { time: '11:30', title: 'Khai tiệc' },
            { time: '12:00', title: 'Giao lưu văn nghệ' },
            { time: '13:00', title: 'Kết thúc tiệc' }
        ]
    },
    {
        id: 'event-thanh-hon-nha-trai',
        title: 'LỄ  THÀNH HÔN NHÀ TRAI',
        time: '09:00 sáng',
        date: (<>
            Thứ tư 31 / 12 / 2025 < br />
            (tức ngày 12 tháng 11 năm Ất Tỵ)
        </>),
        dateISO: '20251231',
        startTime: '09:00',
        endTime: '10:30',
        address: (<>
            Tư gia nhà trai: Số 5 - D1, phố Hồng Quang, P.Định Công, Hà Nội < br />
            (gần trường quốc tế Reigate Grammar VN)
        </>),
        addressText: 'Số 5-D1, phố Hồng Quang, P. Định Công, Hà Nội',
        image: '/images/album_1/HAN03207.jpg',
        mapLink: 'https://maps.app.goo.gl/bHKXmZNsxPZ7Q7Vw5',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326.7090476779058!2d105.83216456965982!3d20.974301798791362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac59da230777%3A0x624697cca65ddbdd!2zUC4gSOG7k25nIFF1YW5nLCBIb8OgbmcgTWFpLCBIw6AgTuG7mWksIFZpZXRuYW0!5e1!3m2!1sen!2sus!4v1763576544631!5m2!1sen!2sus',
        month: 'Tháng 12',
        day: '31',
        dayOfWeek: 'Thứ tư',
        lunarDate: '12/11 Ất Tỵ',
        timeline: [
            { time: '09:00', title: 'Lễ đón dâu và Lễ gia tiên tại nhà trai' },
            { time: '09:30', title: 'Mời trà & Chụp ảnh' },
            { time: '10:00', title: 'Di chuyển ra trung tâm tiệc cưới Mipec Palace' }
        ]
    },
    {
        id: 'event-tiec-cuoi-nha-trai',
        title: 'TIỆC CƯỚI NHÀ TRAI',
        time: '11:30 trưa',
        date: (<>
            Thứ tư 31 / 12 / 2025 < br />
            (tức ngày 12 tháng 11 năm Ất Tỵ)
        </>),
        dateISO: '20251231',
        startTime: '11:30',
        endTime: '13:30',
        address: (<>
            Sảnh tầng 5 Trung tâm tiệc cưới Mipec Palace, số 229 Tây Sơn, P.Kim Liên, Hà Nội < br />
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
        timeline: [
            { time: '11:30', title: 'Đón khách' },
            { time: '11:50', title: 'Làm lễ thành hôn' },
            { time: '12:00', title: 'Khai tiệc' },
            { time: '13:30', title: 'Tiễn khách' }
        ]
    },
];

// Helper to get consistent event Date object in Vietnam Time (GMT+7)
export const getEventDate = (dateISO: string, time: string) => {
    // dateISO is YYYYMMDD, convert to YYYY-MM-DD
    const dateStr = `${dateISO.slice(0, 4)}-${dateISO.slice(4, 6)}-${dateISO.slice(6, 8)}`;
    // Create date string with explicit offset for Vietnam
    return new Date(`${dateStr}T${time}:00+07:00`);
};

export const getEventStatus = (event: WeddingEvent, now: Date): EventStatus => {
    const start = getEventDate(event.dateISO, event.startTime);
    const end = getEventDate(event.dateISO, event.endTime);

    if (now < start) return 'upcoming';
    if (now > end) return 'completed';
    return 'happening';
};
