import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Chapter } from '~entities/chapter';

import { LocalStorage } from '~shared/lib/storage';

const SLUG_KEY = 'keepReading/currentChapterSlug';

export const useLastSlug = () => {
  const [chapterSlug, setChapterSlug] = useState<Maybe<Chapter['slug']>>(null);

  const { query } = useRouter();

  // Gets saved slug from LS and restores him
  useEffect(() => {
    const currentChapterSlugFromLS = LocalStorage.getItem(SLUG_KEY);

    if (currentChapterSlugFromLS) {
      setChapterSlug(currentChapterSlugFromLS);
    }
  }, []);

  // Saves last chapter slug
  useEffect(() => {
    if (query.chapter) {
      setChapterSlug(query.chapter as string);

      LocalStorage.setItem(SLUG_KEY, query.chapter);
    }
  }, [query?.chapter]);

  return { chapterSlug };
};
