import { useState, useEffect } from 'react';
import getCharacters from '@core/api/character/character.helpers';
import { ICharacter } from '@core/api/character/character.types';
import { loadMore } from './use-characters.helpers';
import { IProps } from './use-characters.types';

const useCharacters = (data: Array<ICharacter> = []): IProps => {
  const [characters, setCharacters] = useState<Array<ICharacter>>(data);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [endOfList, setEndOfList] = useState<boolean>(data?.length === 0);

  useEffect(() => {
    const updateCharacters = async () => {
      if (page > 1) {
        const moreData = await getCharacters(page);
        const { error, message, result: moreResults } = moreData;
        if (!error) {
          setCharacters([...characters, ...moreResults]);
        } else {
          setEndOfList(true);
          // eslint-disable-next-line no-alert
          alert(message?.description ?? message?.text);
        }
        setLoading(false);
      }
    };

    updateCharacters();
  }, [page]);

  return {
    characters,
    loading,
    endOfList,
    handleLoadMore: loadMore(page, setPage, setLoading),
  };
};

export default useCharacters;
