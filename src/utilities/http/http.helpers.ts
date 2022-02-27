/* eslint-disable indent */
import {
  THttpMethod,
  IHttpResponseFetch,
  IHttpResponseHeaders,
} from './http.types';

const objectToUrlParams = (object: object): string => {
  let params = '';
  Object.keys(object).forEach((key) => {
    params +=
      params === ''
        ? `?${key}=${encodeURIComponent(object[key])}`
        : `&${key}=${encodeURIComponent(object[key])}`;
  });
  return params;
};

const getHttpRequestHeaders = (method: THttpMethod): IHttpResponseHeaders => ({
  method,
  headers: new Headers({
    Accept: 'application/json, text/plain, multipart/form-data, */*',
    'Content-Type': 'application/json; charset=UTF-8',
  }),
});

const executeHttpRequest = <T>(
  url: string,
  headers: object
): IHttpResponseFetch<T> =>
  fetch(url, headers).then(async (response) => {
    const { status, statusText } = response;
    const result = await response.json();
    return {
      status,
      statusText,
      error: status !== 200,
      result,
    };
  });

export const statusMessages = {
  200: { text: 'Dados encontrado com sucesso!' },
  403: { text: 'Requisição não autorizada.' },
  404: { text: 'Os dados solicitados não foram encontrados.' },
  500: { text: 'Houve um erro ao buscar os dados.' },
};

export const get = <T>(
  url: string,
  queryParams: object = {}
): IHttpResponseFetch<T> => {
  try {
    const fmtUrl = `${url}${objectToUrlParams(queryParams)}`;
    const fmtHeaders = getHttpRequestHeaders('get');

    return executeHttpRequest(fmtUrl, fmtHeaders);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      `Um erro foi disparado ao tentar realizar um GET para ${url}`,
      error
    );
    return null;
  }
};
