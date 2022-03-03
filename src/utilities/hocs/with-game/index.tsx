import { useState, useEffect } from 'react';
import getCharacters from '@core/api/character/character.helpers';
import { ICharacter } from '@core/api/character/character.types';
import { finishTime, updateAnswers, loadMore } from './with-game.helpers';
import { IProps, IAnswer } from './with-game.types';

// eslint-disable-next-line prettier/prettier
const withGame = (Component: React.ComponentType<IProps>): React.FC<IProps> =>
  (props) => {
    const { data } = props;
    const { result } = data;
    const [characters, setCharacters] = useState<Array<ICharacter>>(result);
    const [hasTime, setHasTime] = useState<boolean>(true);
    const [answers, setAnswers] = useState<Array<IAnswer>>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [endOfList, setEndOfList] = useState<boolean>(false);

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

    const hocProps = {
      characters,
      hasTime,
      answers,
      loading,
      endOfList,
      finishTime: finishTime(setHasTime),
      updateAnswers: updateAnswers(answers, setAnswers),
      loadMore: loadMore(page, setPage, setLoading),
    };

    return <Component {...props} {...hocProps} />;
  };

export default withGame;
