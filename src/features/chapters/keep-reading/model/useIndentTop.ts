import { useEffect, useState } from 'react';

import { useWindowScroll } from '~shared/hooks';
import { LocalStorage } from '~shared/lib/storage';

const INDENT_TOP_KEY = 'keepReading/currentChapterIndentTop';

export const useIndentTop = () => {
  const [storedIndentTop, setStoredIndentTop] = useState<number>(
    LocalStorage.getItem(INDENT_TOP_KEY) ?? 0
  );

  const { scrollPercentY } = useWindowScroll();

  // Keeps top indent when scrolling
  useEffect(() => {
    setStoredIndentTop(scrollPercentY);
    LocalStorage.setItem(INDENT_TOP_KEY, scrollPercentY);
  }, [scrollPercentY]);

  const getIndentTop = () => {
    const {
      documentElement: { scrollHeight, clientHeight },
    } = document;

    if (!storedIndentTop) {
      return 0;
    }

    return (storedIndentTop * (scrollHeight - clientHeight)) / 100;
  };

  return { getIndentTop };
};
