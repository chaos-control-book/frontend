import useSWR from 'swr';

import type { Chapter } from '~entities/chapter';
import type { ActionDate, CoverImage } from '~entities/types';

import { request } from '~shared/api/request';
import { API_URLS } from '~shared/config/urls';

export type Book = {
  id: number;
  title: string;
  description?: Maybe<string>;
  volume: number;
  coverImage?: Maybe<CoverImage>;
  chapters?: Maybe<Chapter[]>;
  slug: string;
  created_by?: ActionDate;
  updated_by?: ActionDate;
  published_at?: ActionDate;
};

export const getBooks = async () => request<Book[]>(API_URLS.BOOKS);

export const useBooks = () => useSWR<Book[], Error>(API_URLS.BOOKS, request);
