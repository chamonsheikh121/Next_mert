"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const getEndOfDay = () => {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59
    );
  };

  const calculateTimeLeft = () => {
    const difference = getEndOfDay().getTime() - new Date().getTime();
    if (difference <= 0) return null;

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <div>Time&apos;s up!</div>;

  return (
    <div className="flex gap-2 text-xl items-center md:text-2xl font-bold">
      <div className="border border-gray-400 p-2 px-10 rounded-full">
        <span>{timeLeft.hours.toString().padStart(2, "0")}h</span>
      </div>
      :
      <div className="border border-gray-400 p-2 px-10 rounded-full">
        <span>{timeLeft.minutes.toString().padStart(2, "0")}m</span>
      </div>
      :
      <div className="border text-red-600 border-red-600 p-2 px-10 rounded-full">
        <span>{timeLeft.seconds.toString().padStart(2, "0")}s</span>
      </div>
    </div>
  );
};

export default Countdown;
