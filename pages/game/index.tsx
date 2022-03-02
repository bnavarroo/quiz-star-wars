import { useState } from 'react';
import type { NextPage } from 'next';
import { SWRConfig } from 'swr';
import Header from '@shared/components/header';
import Countdown from '@shared/components/countdown';
import Card from '@modules/pages/game/components/card';
import ModalResult from '@modules/pages/game/components/modal-result';
import { IProps, IAnswer } from '@modules/pages/game/game.types';
import {
  getCharactersOnServer,
  finishTime,
  updateAnswers,
} from '@modules/pages/game/game.helpers';
import { Wrapper } from '@modules/pages/game/game.styles';

const Game: NextPage<IProps> = ({ data, fallback }) => {
  const [hasTime, setHasTime] = useState<boolean>(true);
  const [answers, setAnswers] = useState<Array<IAnswer>>([]);
  const { result } = data;

  return (
    <SWRConfig value={fallback}>
      <Header>
        <Countdown
          initialTime={120}
          callbackEndOfTime={finishTime(setHasTime)}
        />
      </Header>
      <Wrapper>
        {result.map((character) => (
          <Card
            key={character.name}
            character={character}
            endOfGame={!hasTime}
            callback={updateAnswers(answers, setAnswers)}
          />
        ))}
      </Wrapper>
      {!hasTime && <ModalResult answers={answers} />}
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  return getCharactersOnServer();
}

export default Game;
