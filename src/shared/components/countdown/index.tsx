import useCountdown from '@utilities/hooks/use-countdown';
import { IProps } from './countdown.types';
import * as Styled from './countdown.styles';

const Countdown: React.FC<IProps> = ({ initialTime, callbackEndOfTime }) => {
  const { timeLeft } = useCountdown(initialTime, callbackEndOfTime);
  return (
    <Styled.Container>
      <Styled.Icon />
      <Styled.Text>{timeLeft}</Styled.Text>
    </Styled.Container>
  );
};

export default Countdown;
