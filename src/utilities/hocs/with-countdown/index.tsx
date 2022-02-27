import { useState, useEffect } from 'react';
import fmtTimeLeft from './with-countdown.helpers';
import { IProps } from './with-countdown.types';

// eslint-disable-next-line prettier/prettier
const withCountdown = (Component: React.ComponentType<IProps>): React.FC<IProps> =>
  (props) => {
    const { initialTime, callbackEndOfTime } = props;
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

    const hocProps = { timeLeft: fmtTimeLeft(timeLeft) };

    return <Component {...props} {...hocProps} />;
  };

export default withCountdown;
