export interface IAnswer {
  name: string;
  answer: string;
  usedHelp: boolean;
}

export interface IProps {
  hasTime: boolean;
  answers: Array<IAnswer>;
  onFinishTime: () => void;
  handleUpdateAnswers: (receivedAnswer: IAnswer) => void;
}
