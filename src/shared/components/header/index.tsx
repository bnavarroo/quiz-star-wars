import { memo } from 'react';
import { IProps } from './header.types';
import * as Styled from './header.styles';

export const HeaderComponent: React.FC<IProps> = ({ children }) => (
  <Styled.Container as="header">
    <Styled.Wrapper>
      <Styled.Logo />
      <Styled.Title>StarQuiz</Styled.Title>
      {children}
    </Styled.Wrapper>
  </Styled.Container>
);

export default memo(HeaderComponent);
