import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Chapter } from '~shared/api/types';
import { LocalStorage } from '~shared/lib/storage';

export const useKeepReading = () => {
  const [storedChapterSlug, setStoredChapterSlug] =
    useState<Maybe<Chapter['slug']>>(null);

  const router = useRouter();

  useEffect(() => {
    const currentChapterSlug = LocalStorage.getItem(
      'keepReading/currentChapterSlug'
    );

    if (currentChapterSlug) {
      setStoredChapterSlug(currentChapterSlug);
    }
  }, []);

  useEffect(() => {
    if (router.query.chapter) {
      setStoredChapterSlug(router.query.chapter as string);

      LocalStorage.setItem(
        'keepReading/currentChapterSlug',
        router.query.chapter as string
      );
    }
  }, [router?.query?.chapter]);

  return { storedChapterSlug };
};
