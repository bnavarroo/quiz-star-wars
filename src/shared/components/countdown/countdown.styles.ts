import styled, { css } from 'styled-components';
import { FlexContainer } from '@styles/ui/flex/flex.styles';
import ClockIconSvg from '@assets/img/clock-icon.svg';

export const Container = styled(FlexContainer).attrs({ $alignItems: 'center' })`
  padding: 12px 0;
`;

export const Text = styled.p`
  font-size: 42px;
`;

export const Icon = styled(ClockIconSvg)`
  width: 24px;
  height: auto;
  margin-right: 10px;
  border-radius: 50%;
  ${({ theme }) => css`
    fill: ${theme.colors.text.onPrimary};
    stroke: ${theme.colors.primary};
  `};
`;
