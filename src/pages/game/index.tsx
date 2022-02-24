import { useState } from 'react';
import type { NextPage } from 'next';
import Header from '@shared/components/header';
import Countdown from '@shared/components/countdown';

const Game: NextPage = () => {
  const [hasTime, setHasTime] = useState<boolean>(true);

  return (
    <>
      <Header>
        <Countdown
          initialTime={120}
          callbackEndOfTime={() => setHasTime(false)}
        />
      </Header>
      <div>{hasTime ? 'jogando' : 'Acabooou!'}</div>
    </>
  );
};

export default Game;
