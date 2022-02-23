import { TTheme } from '@core/theme/theme.types';

export const getColorsForButton = (
  theme: TTheme,
  type: string,
  outline: boolean
) => {
  const textOnColor = {
    primary: 'onPrimary',
    secondary: 'onSecondary',
  };
  const background = outline ? 'transparent' : theme.colors[type];
  const borderColor = outline
    ? theme.colors[type]
    : theme.colors.text[textOnColor[type]];
  const textColor = outline
    ? theme.colors[type]
    : theme.colors.text[textOnColor[type]];
  const boxShadowColor = outline ? 'transparent' : theme.colors[type];

  return `
    background: ${background};
    border-color: ${borderColor};
    color: ${textColor};
    box-shadow: 0px 0px 0px 2px ${boxShadowColor};
  `;
};

export default getColorsForButton;
