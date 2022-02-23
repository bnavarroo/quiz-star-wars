import styled, { css } from 'styled-components';
import { ContainerBoxProps } from './container.types';

export const ContainerBox = styled.div<ContainerBoxProps>`
  ${({ theme }) => css`
    width: 100%;
    padding-left: ${theme.paddingBox};
    padding-right: ${theme.paddingBox};
  `};
  max-width: 100%;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  ${({ theme, $full }) => css`
    ${!$full &&
    `
        margin-left: auto;
        margin-right: auto;
        @media(min-width: ${theme.breakpoints.tablet.min}) {
          max-width: ${theme.breakpoints.tablet.min};
        }
        @media(min-width: ${theme.breakpoints.desktopSmall.min}) {
          max-width: ${theme.breakpoints.desktopSmall.min};
        }
        @media(min-width: ${theme.breakpoints.desktop.min}) {
          max-width: ${theme.breakpoints.desktop.min};
        }
        `}
  `};
`;

export default ContainerBox;
