import type { NextPage } from 'next';
import { SWRConfig } from 'swr';
import Header from '@shared/components/header';
import Countdown from '@shared/components/countdown';
import useGame from '@utilities/hooks/use-game';
import CardList from '@modules/pages/game/components/card-list';
import ModalResult from '@modules/pages/game/components/modal-result';
import { IProps } from '@modules/pages/game/game.types';
import getCharactersOnServer from '@modules/pages/game/game.helpers';

const Game: NextPage<IProps> = ({ data, fallback }) => {
  const { hasTime, answers, onFinishTime, handleUpdateAnswers } = useGame();

  return (
    <SWRConfig value={fallback}>
      <Header>
        <Countdown initialTime={120} callbackEndOfTime={onFinishTime} />
      </Header>
      <CardList
        preRenderingCharacters={data?.result}
        endOfGame={!hasTime}
        handleUpdateAnswers={handleUpdateAnswers}
      />
      {!hasTime && <ModalResult answers={answers} />}
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  return getCharactersOnServer();
}

export default Game;
