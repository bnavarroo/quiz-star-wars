import apiConfig from '@core/api/api.helpers';
import { statusMessages, get } from '@utilities/http/http.helpers';
import { ICharacter, ICharacterData, TGetCharacters } from './character.types';

const getCharacters = async (page = 1): Promise<TGetCharacters> => {
  const url = `${apiConfig.url}/people?page=${page}`;
  const response = await get<ICharacterData>(url);
  const { status, result, error } = response;
  const { results: characters } = result;

  let fmtResult: Array<ICharacter> = null;
  if (!error) {
    fmtResult = characters?.map((character, index) => {
      const basePage = (page - 1) * 10 + 1;
      return {
        ...character,
        image: `${apiConfig.urlImages}${index + basePage}.jpg`,
      };
    });
  }

  return {
    ...response,
    result: fmtResult,
    message: error ? statusMessages[status] : '',
  };
};

export default getCharacters;
