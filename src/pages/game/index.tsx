import { useState } from 'react';
import type { NextPage } from 'next';
import { SWRConfig } from 'swr';
import getCharacters from '@core/api/character/character.helpers';
import Header from '@shared/components/header';
import Countdown from '@shared/components/countdown';
import Card from './components/card';
import ModalResult from './components/modal-result';
import { IProps, IAnswer } from './game.types';
import { finishTime } from './game.helpers';
import { Wrapper } from './game.styles';

const Game: NextPage<IProps> = ({ data, fallback }) => {
  const [hasTime, setHasTime] = useState<boolean>(true);
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);
  const { result } = data;

  return (
    <SWRConfig value={fallback}>
      <Header>
        <Countdown
          initialTime={10}
          callbackEndOfTime={finishTime(setHasTime)}
        />
      </Header>
      <Wrapper>
        {result.map((character) => (
          <Card
            key={character.name}
            character={character}
            callback={(receivedAnswer: IAnswer) => {
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
            }}
          />
        ))}
      </Wrapper>
      {!hasTime && <ModalResult answers={answers} />}
    </SWRConfig>
  );
};

export async function getServerSideProps() {
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
          error: true,
          message: {
            text: errorMsg,
          },
        },
      },
    };
  }
}

export default Game;
