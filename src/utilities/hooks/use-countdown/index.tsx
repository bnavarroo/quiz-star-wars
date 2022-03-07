import { useState, useEffect } from 'react';
import fmtTimeLeft from './use-countdown.helpers';
import { IProps } from './use-countdown.types';

const useCountdown = (
  initialTime: number,
  callbackEndOfTime?: () => void
): IProps => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(() => timeLeft - 1);
      } else {
        callbackEndOfTime();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return { timeLeft: fmtTimeLeft(timeLeft) };
};

export default useCountdown;
