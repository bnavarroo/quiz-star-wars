import { ICharacter } from '@core/api/character/character.types';

export interface IProps {
  characters: Array<ICharacter>;
  error: boolean;
  loading: boolean;
  message?: string;
  endOfList: boolean;
  callFromApi: boolean;
  page: number;
  handlePageChange: () => void;
}
