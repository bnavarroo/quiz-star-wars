import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import AppTheme from '@core/theme';
import BasicTemplate from '@templates/basic';
import GlobalStyle from '@styles/global.styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={AppTheme}>
    <BasicTemplate>
      <Component {...pageProps} />
    </BasicTemplate>
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
