import { IColors } from '@shared/types/colors.types';

export interface IStyledButtonProps {
  $type: keyof IColors;
  $outline?: boolean;
}
