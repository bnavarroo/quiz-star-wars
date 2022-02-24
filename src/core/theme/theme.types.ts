import { IBreakpoints } from '@shared/types/breakpoints.types';
import { ISizeOnDevice } from '@shared/types/device.types';
import { IColors, IColorsText } from '@shared/types/colors.types';

export interface ITheme {
  fontSize: string;
  fontWeight: number;
  paddingBox: string;
  breakpoints: IBreakpoints;
  colors: IColors & IColorsText;
  header: {
    height: ISizeOnDevice;
  };
  footer: {
    height: ISizeOnDevice;
  };
}
