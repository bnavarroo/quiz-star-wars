import { useState } from 'react';
import { TGetCharacters } from '@core/api/character/character.types';
import { finishTime, updateAnswers } from './use-game.helpers';
import { IProps, IAnswer } from './use-game.types';
import useCharacters from '../use-characters';

const useGame = (data: TGetCharacters): IProps => {
  const { characters, loading, endOfList, handleLoadMore } = useCharacters(
    data?.result
  );
  const [hasTime, setHasTime] = useState<boolean>(true);
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);

  return {
    characters,
    loading,
    endOfList,
    handleLoadMore,
    hasTime,
    answers,
    onFinishTime: finishTime(setHasTime),
    handleUpdateAnswers: updateAnswers(answers, setAnswers),
  };
};

export default useGame;
