import {
  ICharacterRepository,
  ICharacterData,
  ICharacter,
  TGetCharacters,
} from '@core/api/character/character.types';

export const characterRepositoryMock: ICharacterRepository = {
  name: 'mock',
  height: 'mock',
  mass: 'mock',
  skin_color: 'mock',
  eye_color: 'mock',
  birth_year: 'mock',
  gender: 'mock',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: `mock`,
  edited: `mock`,
  url: 'mock',
};

export const characterMock: ICharacter = {
  ...characterRepositoryMock,
  image: 'mock',
};

export const characterDataMock: ICharacterData = {
  count: '1',
  next: null,
  previous: null,
  results: [characterRepositoryMock],
};

export const getCharactersMock: TGetCharacters = {
  status: 200,
  statusText: 'success',
  error: false,
  result: [characterMock],
  message: {
    text: 'mock',
    description: 'mock',
  },
};
