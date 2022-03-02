import styled, { css } from 'styled-components';
import { ContainerBox } from '@styles/ui/container/container.styles';
import { FlexContainer } from '@styles/ui/flex/flex.styles';
import { DarthLogo } from '@styles/ui/logo/logo.styles';

export const Container = styled(ContainerBox)``;

export const Wrapper = styled(FlexContainer).attrs({
  $direction: 'column',
  $alignItems: 'center',
  $justifyContent: 'space-between',
})`
  width: 100%;
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      flex-direction: row;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 42px;
    font-weight: 600;
    @media (min-width: ${theme.breakpoints.tablet.min}) {
      margin-right: auto;
    }
  `}
`;

export const Logo = styled(DarthLogo).attrs({ $maxWidth: '150px' })``;
