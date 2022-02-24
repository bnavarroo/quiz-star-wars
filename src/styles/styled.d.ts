/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ITheme } from '@core/theme/theme.types';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
