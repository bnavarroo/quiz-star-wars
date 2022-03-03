import { IProps as IComponentProps } from '@modules/pages/game/game.types';
import { ICharacter } from '@core/api/character/character.types';

export interface IAnswer {
  name: string;
  answer: string;
  usedHelp: boolean;
}

export interface IProps extends IComponentProps {
  characters: Array<ICharacter>;
  hasTime: boolean;
  answers: Array<IAnswer>;
  loading: boolean;
  endOfList: boolean;
  finishTime: () => void;
  updateAnswers: (receivedAnswer: IAnswer) => void;
  loadMore: () => void;
}
