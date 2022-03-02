import { ICharacter } from '@core/api/character/character.types';
import { IAnswer } from '@modules/pages/game/game.types';

export type TCallbackProp = (arg: IAnswer) => void;

export interface IProps {
  character: ICharacter;
  callback: TCallbackProp;
  endOfGame: boolean;
}
