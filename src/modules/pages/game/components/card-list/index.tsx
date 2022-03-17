import Card from '@modules/pages/game/components/card';
import { IProps } from './card-list.types';
import * as Styled from './card-list.styles';

export const CardListComponent: React.FC<IProps> = ({
  listCharacters,
  endOfGame,
  callback,
}) => (
  <Styled.Wrapper>
    {listCharacters?.map((character) => (
      <Card
        key={character.name}
        character={character}
        endOfGame={endOfGame}
        callback={callback}
      />
    ))}
  </Styled.Wrapper>
);

export default CardListComponent;
