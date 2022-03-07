import type { NextPage } from 'next';
import { SWRConfig } from 'swr';
import Header from '@shared/components/header';
import Countdown from '@shared/components/countdown';
import PageLoader from '@shared/components/page-loader';
import useGame from '@utilities/hooks/use-game';
import Card from '@modules/pages/game/components/card';
import ModalResult from '@modules/pages/game/components/modal-result';
import { IProps } from '@modules/pages/game/game.types';
import getCharactersOnServer from '@modules/pages/game/game.helpers';
import { Wrapper, MoreButton } from '@modules/pages/game/game.styles';

const Game: NextPage<IProps> = ({ data, fallback }) => {
  const {
    characters,
    hasTime,
    answers,
    loading,
    endOfList,
    onFinishTime,
    handleUpdateAnswers,
    handleLoadMore,
  } = useGame(data);

  return (
    <SWRConfig value={fallback}>
      <Header>
        <Countdown initialTime={120} callbackEndOfTime={onFinishTime} />
      </Header>
      <Wrapper>
        {characters.map((character) => (
          <Card
            key={character.name}
            character={character}
            endOfGame={!hasTime}
            callback={handleUpdateAnswers}
          />
        ))}
      </Wrapper>
      {!endOfList && (
        <MoreButton onClick={handleLoadMore}>
          Carregar mais personagens
        </MoreButton>
      )}
      {!hasTime && <ModalResult answers={answers} />}
      <PageLoader isVisible={loading} />
    </SWRConfig>
  );
};

export async function getServerSideProps() {
  return getCharactersOnServer();
}

export default Game;
