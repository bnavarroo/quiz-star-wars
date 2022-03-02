/* eslint-disable prettier/prettier */
import { Dispatch, SetStateAction } from 'react';
import getCharacters from '@core/api/character/character.helpers';
import { IAnswer, IPropsFromServer } from './game.types';

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

export const getCharactersOnServer = async (): Promise<IPropsFromServer> => {
  const errorMsg = 'Erro ao buscar dados de personagens';
  try {
    const data = await getCharacters();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: {
        data: {
          status: 500,
          statusText: '',
          result: null,
          error: true,
          message: {
            text: errorMsg,
          },
        },
      },
    };
  }
}
