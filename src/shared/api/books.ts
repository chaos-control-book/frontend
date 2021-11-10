import useSWR from 'swr';

import { request } from './request';
import { Book } from './types';

const BOOKS_URL = '/books';

export const getBooks = async (): Promise<Book[]> => {
  const response = await request(BOOKS_URL);
  return response;
};

export const useBooks = () => useSWR<Book[], Error>(BOOKS_URL, request);
