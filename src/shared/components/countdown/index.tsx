import withCountdown from '@utilities/hocs/countdown';
import { IProps } from '@utilities/hocs/countdown/countdown.types';
import { Container, Text, Icon } from './countdown.styles';

const Countdown: React.FC<IProps> = ({ timeLeft }) => (
  <Container>
    <Icon />
    <Text>{timeLeft}</Text>
  </Container>
);

export default withCountdown(Countdown);
