import useSWR from 'swr';

import type { Book } from '~entities/book';
import type { ActionDate, CoverImage } from '~entities/types';

import { request } from '~shared/api/request';
import { API_URLS } from '~shared/config/urls';

export type Chapter = {
  id: number;
  title: string;
  number: number;
  content: string;
  book?: Maybe<Book>;
  slug: string;
  placeOfAction?: Maybe<string>;
  coverImage?: Maybe<CoverImage>;
  created_by?: ActionDate;
  updated_by?: ActionDate;
  published_at?: ActionDate;
};

export const getChapters = async () => request<Chapter[]>(API_URLS.CHAPTERS);

export const getChapterBySlug = async (slug?: Chapter['slug']) => {
  const chapters = await getChapters();

  const currentChapter = chapters.find((c) => c.slug === slug);

  return currentChapter ?? null;
};

export const useChapters = () =>
  useSWR<Chapter[], Error>(API_URLS.CHAPTERS, request);
