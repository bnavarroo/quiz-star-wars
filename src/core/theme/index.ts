import { ITheme } from './theme.types';

const AppTheme: Readonly<ITheme> = {
  fontSize: '14px',
  fontWeight: 300,
  paddingBox: '20px',
  breakpoints: {
    desktop: { min: '1200px', max: '100vw' },
    desktopSmall: { min: '1024px', max: '1199.98px' },
    tablet: { min: '640px', max: '1023.98px' },
    mobile: { min: '375px', max: '639.98px' },
    mobileSmall: { min: '0px', max: '374.98px' },
  },
  colors: {
    primary: '#000',
    secondary: '#AFAF9D',
    text: {
      default: '#333',
      onPrimary: '#FDFF00',
      onSecondary: '#000',
    },
  },
  header: {
    height: {
      desktop: '112px',
      mobile: '154px',
    },
  },
  footer: {
    height: {
      desktop: '60px',
      mobile: '88px',
    },
  },
};

export default AppTheme;
