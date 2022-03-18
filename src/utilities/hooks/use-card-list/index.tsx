import { useState, useEffect } from 'react';
import useCharacters from '@utilities/hooks/use-characters';
import { ICharacter } from '@core/api/character/character.types';
import { IProps } from './use-card-list.types';

const useCardList = (preRenderingCharacters: Array<ICharacter>): IProps => {
  const hasPreRenderingCharacters = preRenderingCharacters?.length > 0;
  const initialPage = hasPreRenderingCharacters ? 2 : 1;

  const {
    characters,
    loading,
    endOfList,
    callFromApi,
    page,
    handlePageChange,
  } = useCharacters(initialPage);

  const [currentCharacters, setCurrentCharacters] = useState<Array<ICharacter>>(
    preRenderingCharacters ?? []
  );
  const [updateList, setUpdateList] = useState<boolean>(
    !hasPreRenderingCharacters
  );

  useEffect(() => {
    if (callFromApi) {
      setUpdateList(true);
    }
  }, [page]);

  useEffect(() => {
    if (updateList && characters?.length > 0) {
      setCurrentCharacters([...currentCharacters, ...characters]);
      setUpdateList(false);
    }
  }, [characters]);

  return {
    currentCharacters,
    endOfList,
    loading,
    handlePageChange,
  };
};

export default useCardList;
