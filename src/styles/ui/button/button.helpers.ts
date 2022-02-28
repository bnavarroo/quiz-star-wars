import { ITheme } from '@core/theme/theme.types';
import { TSizesButton } from './button.types';

export const getColorsForButton = (
  theme: ITheme,
  type: string,
  outline: boolean
): string => {
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

export const getSizeForButton = (size?: TSizesButton): string => {
  const sizes = {
    default: '18px',
    small: '14px',
    big: '22px',
  };

  const fontSize = sizes[size] ?? sizes.default;

  return `font-size: ${fontSize}`;
};
