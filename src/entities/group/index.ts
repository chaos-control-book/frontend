import useSWR from 'swr';

import type { ActionDate, CoverImage } from '~entities/types';

import { request } from '~shared/api/request';
import { API_URLS } from '~shared/config/urls';

export type Group = {
  id: number;
  title: string;
  subtitle?: Maybe<string>;
  coverImage?: Maybe<CoverImage>;
  description: string;
  slug: string;
  created_by?: ActionDate;
  updated_by?: ActionDate;
  published_at?: ActionDate;
};

export const getGroups = async () => request<Group[]>(API_URLS.GROUPS);

export const getGroupBySlug = async (slug?: Group['slug']) => {
  const groups = await getGroups();

  const currentGroup = groups.find((g) => g.slug === slug);

  return currentGroup ?? null;
};

export const useGroups = () => useSWR<Group[], Error>(API_URLS.GROUPS, request);
