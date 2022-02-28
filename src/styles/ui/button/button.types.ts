import { IColors } from '@shared/types/colors.types';

export type TSizesButton = 'default' | 'small' | 'big';

export interface IStyledButtonProps {
  $type: keyof IColors;
  $size?: TSizesButton;
  $outline?: boolean;
}
