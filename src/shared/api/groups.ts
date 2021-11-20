import useSWR from 'swr';

import { request } from './request';
import { Group } from './types';

const GROUPS_URL = '/groups';

export const getGroups = async (): Promise<Group[]> => request(GROUPS_URL);

export const getGroupBySlug = async (slug?: Group['slug']) => {
  const groups = await getGroups();

  const currentGroup = groups.find((g) => g.slug === slug);

  return currentGroup ?? null;
};

export const useGroups = () => useSWR<Group[], Error>(GROUPS_URL, request);
