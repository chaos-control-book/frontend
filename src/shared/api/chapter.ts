import useSWR from 'swr';

import { request } from './request';
import { Chapter } from './types';

const CHAPTERS_URL = '/chapters';

export const getChapters = async (): Promise<Chapter[]> =>
  request(CHAPTERS_URL);

export const getChapterBySlug = async (slug?: Chapter['slug']) => {
  const chapters = await getChapters();

  const currentChapter = chapters.find((c) => c.slug === slug);

  return currentChapter ?? null;
};

export const useChapters = () =>
  useSWR<Chapter[], Error>(CHAPTERS_URL, request);
