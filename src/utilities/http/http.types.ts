export type THttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface IHttpResponseMsg {
  text: string;
  description?: string;
}

export interface IHttpResponseHeaders {
  method: THttpMethod;
  headers: Headers;
}

export interface IHttpResponse<T> {
  status: number;
  statusText: string;
  error: boolean;
  result: T;
  message?: IHttpResponseMsg;
}

export type IHttpResponseFetch = Promise<IHttpResponse<unknown>> | null;
