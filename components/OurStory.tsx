import React from 'react';

const storyMilestones = [
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Lớp học tiếng anh, chung nhóm thuyết trình, giảnh giải nhất',
    date: 'Tháng 3 năm 2019',
    description: "Chúng mình gặp nhau trong một lớp tiếng Anh và được xếp chung nhóm thuyết trình. Từ những buổi cùng chuẩn bị bài, cùng cố gắng luyện tập, tụi mình dần trở nên thân thiết hơn. Khi cả nhóm giành được giải nhất, đó cũng là lúc chúng mình nhận ra rằng bên nhau luôn là điều tự nhiên nhất.",
    photo: '/images/HAN02209.JPG',
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'A Memorable Moment',
    date: 'Spring 2021',
    description: 'Under a sky full of stars during a camping trip, we realized we were meant for each other. That quiet moment in nature solidified our bond and our shared dreams.',
  },
  {
    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    title: 'The Proposal',
    date: 'Winter 2023',
    description: 'At our favorite spot overlooking the city, a promise was made. It was a simple, heartfelt "yes" to a lifetime of adventures and endless love together.',
  },
];

const StoryItem: React.FC<{ milestone: typeof storyMilestones[0]; isLast: boolean }> = ({ milestone, isLast }) => {
  return (
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
          {milestone.photo && (
            <div className="mt-4">
              <img
                src={milestone.photo}
                alt={milestone.title}
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          )}
          <h3 className="font-serif text-2xl text-slate-800 mt-1 mb-2">{milestone.title}</h3>
          <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
        </div>
      </div>
    </div>
  );
};


const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-rose-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-800">Our Story</h2>
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
