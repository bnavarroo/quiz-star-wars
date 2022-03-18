import { ICharacter } from '@core/api/character/character.types';
import { IAnswer } from '@utilities/hooks/use-game/use-game.types';

export type TCallbackProp = (arg: IAnswer) => void;

export interface IForwardCardProps {
  handleUpdateAnswers: TCallbackProp;
  endOfGame: boolean;
}

export interface IProps extends IForwardCardProps {
  preRenderingCharacters: Array<ICharacter>;
}
