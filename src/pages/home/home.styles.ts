import styled from 'styled-components';
import getContentMinHeight from '@core/theme/theme.helpers';
import { FlexContainer } from '@styles/ui/flex/flex.styles';
import { StyledButton } from '@styles/ui/button/button.styles';
import { DarthLogo } from '@styles/ui/logo/logo.styles';

export const Container = styled(FlexContainer).attrs({ $alignItems: 'center' })`
  ${({ theme }) => getContentMinHeight(theme, false)}
`;

export const Wrapper = styled(FlexContainer).attrs({
  $direction: 'column',
  $alignItems: 'center',
  $justifyContent: 'center',
})`
  width: 100%;
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  font-size: 3em;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 4em;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.2em;
  text-align: center;
  margin-top: 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet.min}) {
    font-size: 1.6em;
  }
`;

export const Logo = styled(DarthLogo).attrs({ $maxWidth: '300px' })``;

export const Button = styled(StyledButton)`
  margin-top: 20px;
`;
