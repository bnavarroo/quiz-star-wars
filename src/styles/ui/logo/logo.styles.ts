import styled, { css } from 'styled-components';
import DarthLogoSvg from '@assets/img/darth-logo.svg';
import { DarthLogoProps } from './logo.types';

export const DarthLogo = styled(DarthLogoSvg)<DarthLogoProps>`
  width: 100%;
  height: auto;
  stroke-width: 1px;
  stroke: ${({ theme }) => theme.colors.text.onPrimary};
  max-width: ${({ $maxWidth }) => $maxWidth};
  ${({ theme, $maxWidthOnMobile }) =>
    $maxWidthOnMobile &&
    css`
      @media (max-width: ${theme.breakpoints.tablet.max}) {
        max-width: ${$maxWidthOnMobile};
      }
    `}
`;

export default DarthLogo;
