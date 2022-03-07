import { IProps as IUseCharactersProps } from '@utilities/hooks/use-characters/use-characters.types';

export interface IAnswer {
  name: string;
  answer: string;
  usedHelp: boolean;
}

export interface IProps extends IUseCharactersProps {
  hasTime: boolean;
  answers: Array<IAnswer>;
  onFinishTime: () => void;
  handleUpdateAnswers: (receivedAnswer: IAnswer) => void;
}
