/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';
import { IAnswer } from './with-game.types';

export const finishTime =
  (setHasTime: Dispatch<SetStateAction<boolean>>) => (): void => {
    setHasTime(false);
  };

export const updateAnswers =
  (answers: Array<IAnswer>, setAnswers: Dispatch<SetStateAction<Array<IAnswer>>>) => (receivedAnswer: IAnswer): void => {
    const newAnswers = [...answers];
    const currentAnswer = newAnswers.filter(
      (value) => value.name === receivedAnswer.name
    )?.[0];
    const answerIndex = newAnswers.indexOf(currentAnswer);
    if (answerIndex !== -1) {
      newAnswers[answerIndex] = receivedAnswer;
    } else {
      newAnswers.push(receivedAnswer);
    }
    setAnswers(newAnswers);
  }

export const loadMore =
  (page: number, setPage: Dispatch<SetStateAction<number>>, setLoading: Dispatch<SetStateAction<boolean>>) => (): void => {
    setPage(page + 1);
    setLoading(true);
  };
