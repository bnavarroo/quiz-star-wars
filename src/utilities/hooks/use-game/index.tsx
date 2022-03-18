import { useState } from 'react';
import { finishTime, updateAnswers } from './use-game.helpers';
import { IProps, IAnswer } from './use-game.types';

const useGame = (): IProps => {
  const [hasTime, setHasTime] = useState<boolean>(true);
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);

  return {
    hasTime,
    answers,
    onFinishTime: finishTime(setHasTime),
    handleUpdateAnswers: updateAnswers(answers, setAnswers),
  };
};

export default useGame;
