import React, { useState } from 'react';

const storyMilestones = [
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Lớp học tiếng Anh - chút cảm mến lần đầu',
    date: 'Tháng 3 năm 2019',
    shortDescription: 'Tháng 3 năm 2019, chúng mình gặp nhau trong một lớp tiếng Anh và tình cờ được xếp vào cùng nhóm thuyết trình. Từ những buổi cùng chuẩn bị bài, tụi mình dần trở nên thân thiết hơn...',
    fullDescription: (
      <>
        Tháng 3 năm 2019, chúng mình gặp nhau trong một lớp tiếng Anh và tình cờ được xếp vào cùng nhóm thuyết trình cho chủ đề Science. Tuấn lo phần kỹ thuật, lên kịch bản và dựng video; Vân Anh thì đảm nhiệm phần thuyết trình. Từ những buổi cùng chuẩn bị bài, cùng tập luyện, tụi mình dần trở nên thân thiết hơn. Khi cả nhóm bất ngờ giành được giải nhất và kéo nhau đi liên hoan, bọn mình có dịp nhìn thấy cuộc sống của nhau ngoài khuôn khổ lớp học. <br />
        Cả Tuấn và Vân Anh đều giữ trong lòng những ấn tượng đặc biệt, những rung động mơ hồ… nhưng không ai nói thành lời. Tuấn khi ấy đã ấp ủ kế hoạch sang Nhật du học, còn Vân Anh vẫn miệt mài với học tập, bạn bè và những hoạt động xã hội.<br />
        Hai người, hai lối rẽ, nhưng lại từng có một đoạn đường ngắn ngủi và dịu dàng đi chung - đủ để trái tim ghi nhớ mãi...
      </>
    ),
    photo: '/images/kyniem01.jpeg',
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Hôm ấy khoảnh khắc giao thừa -  tuyết lần đầu rơi',
    date: 'Giao thừa 2025',
    shortDescription: 'Sau hơn 5 năm, những ngày cuối năm 2024, họ gặp lại nhau tại Nhật Bản. Trong khoảnh khắc chào đón năm mới, khi tuyết lần đầu rơi, hai trái tim cuối cùng đã hòa chung nhịp đập...',
    fullDescription: (
      <>
        Tưởng rằng họ đã lạc nhau giữa những lối rẽ riêng, nhưng hóa ra định mệnh chỉ chờ lúc cả hai chín muồi hơn. <br />
        Sau hơn 5 năm, những ngày cuối năm 2024 đầu năm 2025, V.A có chuyến nghỉ lễ du lịch tới Nhật. V.A nhờ Tuấn giúp đỡ tư vấn lịch trình, còn Tuấn thì đã âm thầm biến chuyến đi ấy thành một "giấc mơ nhỏ", tỉ mỉ lên kế hoạch, chỉnh từng lịch trình, chuẩn bị chu đáo, để V.A có thể  hiện thực hóa "Chuyến đi trong mơ tới Nhật Bản" mà V.A đã từng nói với Tuấn - hồi cả 2 còn là bạn. <br />
        Có lẽ đó là thời khắc chào đón ngày đầu tiên của 2025, Tuấn không biết từ khi nào đã chuẩn bị pháo sẵn sàng, mang ra công viên, hai đứa lạnh cóng tay đốt mãi không được, khi ánh sáng lóe lên, những bông tuyết đầu tiên trong đêm cũng khẽ rơi xuống, dưới ánh đèn đường, hai con người, hai trái tim bỗng dưng hòa chung 1 nhịp đập, Tuấn ngỏ lời, họ chính thức trở thành người yêu của nhau.
      </>
    ),
    video: '/images/kyniem02.mp4',
  },
  {
    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    title: 'Lời cầu hôn - lời nguyện ước',
    date: 'Mùa xuân 2025',
    shortDescription: 'Mùa xuân năm 2025, trong chuyến đi ngắm hoa anh đào tại Tokyo, Tuấn đã cầu hôn Vân Anh. Một khoảnh khắc đặc biệt mà cả Tokyo dường như cũng mừng cho họ...',
    fullDescription: (
      <>
        Mùa xuân năm 2025, sau khi Tuấn xin phép gia đình được đón V.A đi chơi, chuyến đi "ngắm Nhật Bản mùa hoa anh đào" bắt đầu. Việc đầu tiên khi thấy V.A là…. Tuấn chụp ảnh gửi cho gia đình V.A và "báo cáo" 😊.<br />
        Có lẽ hai đứa cũng nhận được tín hiệu ủng hộ từ hai bên gia đình, hai trái tim thổn thức cuối cùng cũng tìm thấy nhau, và muốn rằng sẽ gắn kết bền lâu bằng một hành động cam kết cao hơn nữa. Ngay tối đón V.A, Tuấn đã sắp xếp…và cầu hôn, trước sự chứng kiến của Tokyo, và nhận được những lời chúc rất xinh đẹp từ mọi người xung quanh 💕💕💕.<br />
        Trên lối về, hai bên đường trải đầy hoa và ánh đèn đường ấm áp, gió khẽ lướt qua mang theo những cánh hoa anh đào, những bông hoa tuylip rực rỡ sắc màu, khẽ lạnh lạnh, hai bàn tay siết chặt lấy nhau hơn, mà trên bàn tay ai - giờ đã có thêm 1 chiếc nhẫn "cầu hôn" đêm theo những lời nguyện ước….đêm đó, bỗng, cũng có pháo hoa bắn từ xa, V.A khẽ thốt lên "hôm nay thật là một ngày đặc biệt"; có lẽ, cả Tokyo cũng mừng cho chúng mình.
      </>
    ),
    photo: '/images/kyniem03.jpg',
  },
];

const StoryItem: React.FC<{ milestone: typeof storyMilestones[0]; isLast: boolean }> = ({ milestone, isLast }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const openFullscreen = () => {
    if (milestone.photo) {
      setIsFullscreen(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'unset';
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Close on ESC key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeFullscreen();
    };
    if (isFullscreen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isFullscreen]);

  return (
    <>
      <div className="relative">
        {/* Vertical line - hidden on the last item */}
        {!isLast && <div className="absolute top-5 left-5 h-full w-0.5 bg-rose-200" style={{ transform: 'translateX(-50%)' }}></div>}

        <div className="flex items-start space-x-6">
          {/* Icon */}
          <div className="z-10 bg-rose-500 text-white p-3 rounded-full shadow-lg flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={milestone.icon} />
            </svg>
          </div>

          {/* Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
            <p className="text-sm text-rose-600 font-semibold">{milestone.date}</p>

            {/* Photo */}
            {milestone.photo && (
              <div className="mt-4">
                <img
                  src={milestone.photo}
                  alt={milestone.title}
                  onClick={openFullscreen}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                />
              </div>
            )}

            {/* Video */}
            {milestone.video && (
              <div className="mt-4">
                <video
                  src={milestone.video}
                  poster="/images/thumbnail_kyniem02.jpg"
                  controls
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            <h3 className="font-sans text-2xl text-slate-800 mt-1 mb-2 font-medium">{milestone.title}</h3>

            {/* Description with expand/collapse */}
            <div className="text-slate-600 leading-relaxed font-sans">
              {isExpanded ? milestone.fullDescription : milestone.shortDescription}
            </div>

            {/* Read more/less button */}
            <button
              onClick={toggleExpand}
              className="mt-3 text-rose-600 hover:text-rose-700 font-medium text-sm flex items-center gap-1 transition-colors duration-200"
            >
              {isExpanded ? (
                <>
                  Thu gọn
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Đọc thêm
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && milestone.photo && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white hover:text-rose-300 transition-colors duration-200 z-10"
            aria-label="Close fullscreen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={milestone.photo}
            alt={milestone.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};


const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-rose-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-slate-700 mb-4">
            Câu chuyện tình yêu
          </h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {storyMilestones.map((milestone, index) => (
            <StoryItem
              key={index}
              milestone={milestone}
              isLast={index === storyMilestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
