import styled from 'styled-components';
import { StyledButtonProps } from './button.types';
import { getColorsForButton } from './button.helpers';

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  font-size: 22px;
  outline: none;
  border-style: solid;
  border-width: 2px;
  padding: 10px;
  text-transform: lowercase;
  border-radius: 8px;
  letter-spacing: 2px;
  ${({ theme, $type, $outline }) =>
    getColorsForButton(theme, $type, !!$outline)};
`;

export default StyledButton;
