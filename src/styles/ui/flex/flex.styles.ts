import styled, { css } from 'styled-components';
import { FlexContainerProps, FlexItemProps } from './flex.types';

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${({ $direction, $flexWrap, $justifyContent, $alignItems }) => css`
    ${$direction && `flex-direction: ${$direction};`}
    ${$flexWrap && `flex-wrap: ${$flexWrap};`}
    ${$justifyContent && `justify-content: ${$justifyContent};`}
    ${$alignItems && `align-items: ${$alignItems};`}
  `}
`;

export const FlexItem = styled.div<FlexItemProps>`
  ${({ $order, $grow, $basis, $shrink }) => css`
    ${$order && `order: ${$order};`}
    ${$grow && `flex-grow: ${$grow};`}
    ${$basis && `flex-basis: ${$basis};`}
    ${$shrink && `flex-shrink: ${$shrink};`}
  `}
`;
