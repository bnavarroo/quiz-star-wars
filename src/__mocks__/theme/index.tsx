import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import AppTheme from '@core/theme';

const ThemeProvider = (props) => (
  <ThemeProviderStyled theme={AppTheme} {...props} />
);

export default ThemeProvider;
