import { TGetCharacters } from '@core/api/character/character.types';

export interface IProps {
  data: TGetCharacters;
  fallback: unknown;
}

export interface IPropsFromServer {
  props: {
    data: TGetCharacters;
  };
}
