import { TBreakpoints } from '@shared/types/breakpoints.types';
import { TSizeOnDevice } from '@shared/types/device.types';

export type TTheme = {
  fontSize: string;
  fontWeight: number;
  paddingBox: string;
  breakpoints: TBreakpoints;
  colors: {
    primary: string;
    secondary: string;
    text: {
      default: string;
      onPrimary: string;
      onSecondary: string;
    };
  };
  header: {
    height: TSizeOnDevice;
  };
  footer: {
    height: TSizeOnDevice;
  };
};
