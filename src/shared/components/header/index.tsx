import { memo } from 'react';
import { IProps } from './header.types';
import { Container, Wrapper, Logo, Title } from './header.styles';

const Header: React.FC<IProps> = ({ children }) => (
  <Container as="header">
    <Wrapper>
      <Logo />
      <Title>StarQuiz</Title>
      {children}
    </Wrapper>
  </Container>
);

export default memo(Header);
