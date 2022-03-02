import { TGetCharacters } from '@core/api/character/character.types';

export interface IProps {
  data: TGetCharacters;
  fallback: unknown;
}

export interface IAnswer {
  name: string;
  answer: string;
  usedHelp: boolean;
}

export interface IPropsFromServer {
  props: {
    data: TGetCharacters;
  };
}
