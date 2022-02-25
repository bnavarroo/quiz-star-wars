import apiConfig from '@core/api/api.helpers';
import { statusMessages, get } from '@utilities/http/http.helpers';
import { IHttpResponse } from '@utilities/http/http.types';
import { ICharacter, ICharacterData, TGetCharacters } from './character.types';

const baseUrl = `${apiConfig.url}/people`;

const getCharacters = async (): Promise<TGetCharacters> => {
  const response = (await get(baseUrl)) as IHttpResponse<ICharacterData> | null;
  const { status, result, error } = response;
  const { results: characters } = result;

  let fmtResult: Array<ICharacter> = null;
  if (!error) {
    fmtResult = characters.map((character, index) => ({
      ...character,
      image: `${apiConfig.urlImages}${index + 1}.jpg`,
    }));
  }

  return {
    ...response,
    result: fmtResult,
    message: error ? statusMessages[status] : '',
  };
};

export default getCharacters;
