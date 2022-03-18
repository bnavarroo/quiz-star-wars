import useCardList from '@utilities/hooks/use-card-list';
import PageLoader from '@shared/components/page-loader';
import Card from '@modules/pages/game/components/card';
import { IProps } from './card-list.types';
import * as Styled from './card-list.styles';

export const CardListComponent: React.FC<IProps> = ({
  preRenderingCharacters,
  endOfGame,
  handleUpdateAnswers,
}) => {
  const { currentCharacters, endOfList, loading, handlePageChange } =
    useCardList(preRenderingCharacters);

  return (
    <>
      <Styled.Wrapper>
        {currentCharacters?.map((character) => (
          <Card
            key={character.name}
            character={character}
            endOfGame={endOfGame}
            handleUpdateAnswers={handleUpdateAnswers}
          />
        ))}
        {!endOfList && (
          <Styled.MoreButton onClick={handlePageChange}>
            Carregar mais personagens
          </Styled.MoreButton>
        )}
      </Styled.Wrapper>
      <PageLoader isVisible={loading} />
    </>
  );
};

export default CardListComponent;
