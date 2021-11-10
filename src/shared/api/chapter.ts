import useSWR from 'swr';

import { request } from './request';
import { Chapter } from './types';

const CHAPTERS_URL = '/chapters';

export const getChapters = async (): Promise<Chapter[]> => {
  const response = await request(CHAPTERS_URL);
  return response;
};

export const useChapters = () =>
  useSWR<Chapter[], Error>(CHAPTERS_URL, request);
