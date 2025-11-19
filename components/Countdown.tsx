import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2025-12-31T00:00:00') - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval as keyof TimeLeft];

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 md:mx-4">
        <span className="text-3xl md:text-5xl font-serif font-bold text-rose-600">
          {value < 10 ? `0${value}` : value}
        </span>
        <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 mt-1">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <section id="event" className="py-12 md:py-20 bg-rose-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-script text-slate-800 mb-8">
          Đếm ngược đến ngày trọng đại của chúng mình
        </h2>
        <div className="flex justify-center items-center">
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span className="text-2xl font-serif text-rose-600">Ngày trọng đại của chúng mình đã đến!</span>
          )}
        </div>
        <div className="mt-8 text-slate-600 font-light italic">
          Thứ tư, ngày 31 tháng 12 năm 2025 (tức ngày 12 tháng 11 năm Ất Tỵ)
        </div>
      </div>
    </section>
  );
};

export default Countdown;
