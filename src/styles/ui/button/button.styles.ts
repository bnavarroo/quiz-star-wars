import styled from 'styled-components';
import { IStyledButtonProps } from './button.types';
import { getColorsForButton, getSizeForButton } from './button.helpers';

export const StyledButton = styled.button<IStyledButtonProps>`
  cursor: pointer;
  outline: none;
  border-style: solid;
  border-width: 2px;
  padding: 10px;
  text-transform: lowercase;
  border-radius: 8px;
  letter-spacing: 2px;
  ${({ theme, $type, $outline }) =>
    getColorsForButton(theme, $type, !!$outline)};
  ${({ $size }) => getSizeForButton($size)};
`;

export default StyledButton;
