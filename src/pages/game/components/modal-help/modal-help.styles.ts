import styled from 'styled-components';
import { FlexContainer } from '@styles/ui/flex/flex.styles';

export const Container = styled(FlexContainer).attrs({
  $direction: 'column',
  $justifyContent: 'center',
  $alignItems: 'center',
})`
  padding: 0 4vw;
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
`;

export const ListAttrs = styled.ul`
  margin-top: 20px;
  font-size: 18px;
  line-height: 22px;

  li {
    text-align: center;
  }
`;
