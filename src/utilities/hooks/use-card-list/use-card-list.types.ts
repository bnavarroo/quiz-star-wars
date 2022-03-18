import { ICharacter } from '@core/api/character/character.types';

export interface IProps {
  currentCharacters: Array<ICharacter>;
  endOfList: boolean;
  loading: boolean;
  handlePageChange: () => void;
}
