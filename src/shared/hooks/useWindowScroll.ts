import { useEffect, useState } from 'react';

import { useThrottle } from '~shared/hooks/useThrottle';

export function useWindowScroll() {
  const [isMounted, setIsMounted] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollPercentY, setScrollPercentY] = useState(0);
  const [scrollPercentX, setScrollPercentX] = useState(0);

  const updateScrollPoints = () => {
    setScrollY(window.scrollY);
    setScrollX(window.scrollX);

    const h = document.documentElement;
    const b = document.body;

    const st = 'scrollTop';
    const sh = 'scrollHeight';

    const sl = 'scrollTop';
    const sw = 'scrollHeight';

    const percentY =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

    const percentX =
      ((h[sl] || b[sl]) / ((h[sw] || b[sw]) - h.clientWidth)) * 100;

    setScrollPercentY(percentY);
    setScrollPercentX(percentX);
  };

  // const onScroll = useThrottle(updateScrollPoints, 100);
  const onScroll = updateScrollPoints;

  useEffect(() => {
    setIsMounted(true);
    updateScrollPoints();
  }, []);

  useEffect(() => {
    if (isMounted) {
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }

    return () => {};
  }, [isMounted, onScroll]);

  return {
    scrollY,
    scrollPercentY,
    scrollX,
    scrollPercentX,
  };
}
