/* eslint-disable prettier/prettier */
import getCharacters from '@core/api/character/character.helpers';
import { IPropsFromServer } from './game.types';

const getCharactersOnServer = async (): Promise<IPropsFromServer> => {
  const errorMsg = 'Erro ao buscar dados de personagens';
  try {
    const data = await getCharacters();
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: {
        data: {
          status: 500,
          statusText: '',
          result: null,
          error: true,
          message: {
            text: errorMsg,
          },
        },
      },
    };
  }
}

export default getCharactersOnServer;
