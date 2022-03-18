import { useState } from 'react';
import useSWR from 'swr';
import { statusMessages, get } from '@utilities/http/http.helpers';
import apiConfig from '@core/api/api.helpers';
import {
  ICharacterData,
  ICharacter,
} from '@core/api/character/character.types';
import { IHttpResponse } from '@utilities/http/http.types';
import { fmtCharactersResult } from '@core/api/character/character.helpers';
import { pageChange } from './use-characters.helpers';
import { IProps } from './use-characters.types';

const useCharacters = (initialPage = 1): IProps => {
  const [page, setPage] = useState<number>(1);

  const callFromApi = page >= initialPage;
  const url = callFromApi ? `${apiConfig.url}/people?page=${page}` : null;
  const { data, error } = useSWR<IHttpResponse<ICharacterData>>(url, get);
  const { status, result } = data ?? {};
  const formattedResult: Array<ICharacter> = error
    ? null
    : fmtCharactersResult(result?.results, page, apiConfig.urlImages);

  return {
    characters: formattedResult,
    loading: callFromApi && !data,
    error,
    message: error ? statusMessages[status] : '',
    endOfList: !formattedResult && page > 1,
    callFromApi,
    page,
    handlePageChange: pageChange(page, setPage),
  };
};

export default useCharacters;
