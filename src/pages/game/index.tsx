import type { NextPage } from 'next';
import { SWRConfig } from 'swr';
import withGame from '@utilities/hocs/with-game';
import { IProps } from '@utilities/hocs/with-game/with-game.types';
import Header from '@shared/components/header';
import Countdown from '@shared/components/countdown';
import PageLoader from '@shared/components/page-loader';
import Card from '@modules/pages/game/components/card';
import ModalResult from '@modules/pages/game/components/modal-result';
import getCharactersOnServer from '@modules/pages/game/game.helpers';
import { Wrapper, MoreButton } from '@modules/pages/game/game.styles';

const Game: NextPage<IProps> = ({
  fallback,
  characters,
  hasTime,
  answers,
  loading,
  endOfList,
  finishTime,
  updateAnswers,
  loadMore,
}) => (
  <SWRConfig value={fallback}>
    <Header>
      <Countdown initialTime={120} callbackEndOfTime={finishTime} />
    </Header>
    <Wrapper>
      {characters.map((character) => (
        <Card
          key={character.name}
          character={character}
          endOfGame={!hasTime}
          callback={updateAnswers}
        />
      ))}
    </Wrapper>
    {!endOfList && (
      <MoreButton onClick={loadMore}>Carregar mais personagens</MoreButton>
    )}
    {!hasTime && <ModalResult answers={answers} />}
    <PageLoader isVisible={loading} />
  </SWRConfig>
);

export async function getServerSideProps() {
  return getCharactersOnServer();
}

export default withGame(Game);
