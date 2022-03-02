import { ICharacter } from '@core/api/character/character.types';

export interface IProps {
  character: ICharacter;
  isVisible?: boolean;
  onHide: () => void;
}
