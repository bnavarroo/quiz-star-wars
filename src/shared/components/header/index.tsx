import { Props } from './header.types';
import { Container, Wrapper, Logo, Title } from './header.styles';

const Header: React.FC<Props> = ({ children }) => (
  <Container as="header">
    <Wrapper>
      <Logo />
      <Title>StarQuiz</Title>
      {children}
    </Wrapper>
  </Container>
);

export default Header;
