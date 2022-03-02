import styled from 'styled-components';
import getContentMinHeight from '@core/theme/theme.helpers';
import { FlexContainer } from '@styles/ui/flex/flex.styles';

export const Container = styled(FlexContainer).attrs({
  $direction: 'column',
  $alignItems: 'center',
  $justifyContent: 'center',
})`
  ${({ theme }) => getContentMinHeight(theme, true)}
`;

export const Title = styled.h3`
  font-size: 6em;
  font-weight: 600;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 2em;
  text-align: center;
  opacity: 0.8;
  margin-top: 10px;
`;

export const LinkContent = styled.p`
  cursor: pointer;
  text-decoration: underline;
  font-size: 1.5em;
  opacity: 0.6;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text.default};
`;
