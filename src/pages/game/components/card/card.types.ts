import { ICharacter } from '@core/api/character/character.types';
import { IAnswer } from '@pages/game/game.types';

export type TCallbackProp = (arg: IAnswer) => void;

export interface IProps {
  character: ICharacter;
  callback: TCallbackProp;
}
