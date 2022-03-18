import apiConfig from '@core/api/api.helpers';
import { statusMessages, get } from '@utilities/http/http.helpers';
import {
  ICharacter,
  ICharacterData,
  ICharacterRepository,
  TGetCharacters,
} from './character.types';

export const fmtCharactersResult = (
  results: Array<ICharacterRepository>,
  page: number,
  urlImages: string
): Array<ICharacter> =>
  results?.map((character, index) => {
    const basePage = (page - 1) * 10 + 1;
    return {
      ...character,
      image: `${urlImages}${index + basePage}.jpg`,
    };
  });

export const getCharacters = async (page = 1): Promise<TGetCharacters> => {
  const url = `${apiConfig.url}/people?page=${page}`;
  const data = await get<ICharacterData>(url);
  const { status, result, error } = data ?? {};

  let fmtResult: Array<ICharacter> = null;
  if (!error) {
    fmtResult = fmtCharactersResult(result?.results, page, apiConfig.urlImages);
  }

  return {
    ...data,
    result: fmtResult,
    message: error ? statusMessages[status] : '',
  };
};
