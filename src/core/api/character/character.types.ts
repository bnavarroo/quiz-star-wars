import { IHttpResponse } from '@utilities/http/http.types';

export interface ICharacterRepository {
  name: string;
  height: string;
  mass: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface ICharacterData {
  count: string;
  next: string | null;
  previous: string | null;
  results: Array<ICharacterRepository>;
}

export interface ICharacter extends ICharacterRepository {
  image: string;
}

export type TGetCharacters = IHttpResponse<Array<ICharacter>>;
