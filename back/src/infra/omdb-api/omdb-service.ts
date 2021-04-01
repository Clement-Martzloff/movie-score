import { URLSearchParams } from 'url';
import env from '../../env';
import omdbAxios from './axios.config';

import AppError from '../../base/app.error';

const { omdbApiKey } = env;

export namespace OmdbApiService {
  export async function searchPaginatedMovies(
    term: string,
    pageNumber: string
  ): Promise<any> {
    const urlParams = new URLSearchParams(
      (function* (): Iterable<[string, any]> {
        yield ['s', term];
        yield ['page', pageNumber];
        yield ['apiKey', omdbApiKey];
      })()
    );

    return new Promise((resolve) => {
      getResponse(`/?${urlParams.toString()}`).then(resolve).catch(console.log);
    });
  }

  export async function findByImdbId(imdbId: string): Promise<any> {
    const urlParams = new URLSearchParams(
      (function* (): Iterable<[string, any]> {
        yield ['i', imdbId];
        yield ['apiKey', omdbApiKey];
      })()
    );

    return new Promise((resolve) => {
      getResponse(`/?${urlParams.toString()}`).then(resolve).catch(console.log);
    });
  }
}

async function getResponse(params: string) {
  try {
    const { data } = await omdbAxios.get(params);

    return data;
  } catch (axiosError) {
    if (axiosError.response) {
      throw new AppError(
        'The request was made and the server responded out of 2xx.'
      );
    }

    if (axiosError.request) {
      throw new AppError('The request was made but no response was received.');
    }
  }
}
