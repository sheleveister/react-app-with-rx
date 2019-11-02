import { from, Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { stringify } from 'qs';


export type ApiRequest = {
  url: string;
  query?: object;
  body?: unknown;
};

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

export type FullApiRequest = ApiRequest & {
  method: ApiMethod;
};

export interface ApiClient {
  readonly error$: Observable<Error>
  readonly request: <R>(request: FullApiRequest) => Observable<R>;
  readonly get: <R>(request: ApiRequest) => Observable<R>;
  readonly post: <R>(request: ApiRequest) => Observable<R>;
  readonly put: <R>(request: ApiRequest) => Observable<R>;
  readonly remove: <R>(request: ApiRequest) => Observable<R>;
}

export const createApiClient = (baseHref: string): ApiClient => {
  const errorSubj$ = new Subject<Error>();
  const error$ = errorSubj$.asObservable();

  const request = <R = never>(request: FullApiRequest): Observable<R> => {
    const url = `${baseHref}${buildUrl(request.url, request.query)}`;
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    const init: RequestInit = {
      method: request.method,
      headers,
      body: JSON.stringify(request.body),
    };

    return from(
      fetch(url, init)
        .then(response => {
          if (!response.ok) {
            throw new Error(`status: ${response.status}, error: ${response.statusText}`);
          }
          return response;
        })
        .then(response => response.text())
        .then(text => (text === '' ? undefined : JSON.parse(text)))
    ).pipe(
      catchError((response: Error) => {
        errorSubj$.next(response);
        return of(undefined as unknown as R);
      }),
    );

  };

  const get = <R = never>(apiRequest: ApiRequest): Observable<R> =>
    request({
      ...apiRequest,
      method: 'GET',
    });

  const post = <Response = never>(apiRequest: ApiRequest): Observable<Response> => {
    return request({
      ...apiRequest,
      method: 'POST',
    });
  };

  const remove = <Response = never>(apiRequest: ApiRequest): Observable<Response> => {
    return request({
      ...apiRequest,
      method: 'DELETE',
    });
  };

  const put = <Response = never>(apiRequest: ApiRequest): Observable<Response> => {
    return request({
      ...apiRequest,
      method: 'PUT',
    });
  };

  return {
    error$,
    request,
    get,
    put,
    post,
    remove,
  };
};

export function buildUrl(url: string, query?: {}): string {
  return query ? `${url}?${stringify(query)}` : url;
}
