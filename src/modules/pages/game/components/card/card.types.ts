import { ICharacter } from '@core/api/character/character.types';
import { IAnswer } from '@utilities/hocs/with-game/with-game.types';

export type TCallbackProp = (arg: IAnswer) => void;

export interface IProps {
  character: ICharacter;
  callback: TCallbackProp;
  endOfGame: boolean;
}
