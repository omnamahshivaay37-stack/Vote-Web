import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex gap-2 sm:gap-4 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-2xl font-bold text-primary">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-2xl font-bold text-primary">:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl font-bold text-primary">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <Card className="w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center bg-card shadow-md hover:shadow-lg transition-shadow">
      <span className="text-2xl sm:text-3xl font-bold text-primary">
        {String(value).padStart(2, "0")}
      </span>
    </Card>
    <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
      {label}
    </span>
  </div>
);
