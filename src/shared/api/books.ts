import useSWR from 'swr';

import { request } from './request';
import { Book } from './types';

const BOOKS_URL = '/books';

export const getBooks = async (): Promise<Book[]> => request(BOOKS_URL);

export const useBooks = () => useSWR<Book[], Error>(BOOKS_URL, request);
