import { useState } from 'react';
import { SWRConfig } from 'swr';
import type { NextPage } from 'next';
import getCharacters from '@core/api/character/character.helpers';
import Header from '@shared/components/header';
import Countdown from '@shared/components/countdown';
import { IProps } from './game.types';

const Game: NextPage<IProps> = ({ data, fallback }) => {
  const [hasTime, setHasTime] = useState<boolean>(true);
  const { result } = data;

  return (
    <SWRConfig value={fallback}>
      <Header>
        <Countdown
          initialTime={120}
          callbackEndOfTime={() => setHasTime(false)}
        />
      </Header>
      <div>{hasTime ? 'jogando' : 'Acabooou!'}</div>
      {result.map((character) => (
        <img src={character.image} alt="?" />
      ))}
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
