import { ICharacter } from '@core/api/character/character.types';

export interface IProps {
  characters: Array<ICharacter>;
  loading: boolean;
  endOfList: boolean;
  handleLoadMore: () => void;
}
