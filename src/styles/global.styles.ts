import cssReset from '@styles/reset.styles';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${cssReset}

  body {
    ${({ theme }) => css`
      color: ${theme.colors.text.default};
      font-size: ${theme.fontSize};
      font-weight: ${theme.fontWeight};
    `};
    font-family: 'Montserrat', sans-serif;
  }

  header, footer {
    width: 100%;
  }
  input {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
