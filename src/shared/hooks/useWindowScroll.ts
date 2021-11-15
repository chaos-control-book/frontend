import { useEffect, useState } from 'react';

import { useThrottleCallback } from '@react-hook/throttle';

import { useEventListener } from '~shared/hooks/useEventListener';

export function useWindowScroll(fps = 30) {
  // Create a states for scroll values with initial values
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollPercentY, setScrollPercentY] = useState(0);
  const [scrollPercentX, setScrollPercentX] = useState(0);

  // Create updater handler that stores calculated scroll values
  const updateScrollPoints = () => {
    const {
      documentElement: {
        scrollTop,
        scrollLeft,
        scrollHeight,
        scrollWidth,
        clientHeight,
        clientWidth,
      },
    } = document;

    const percentY = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const percentX = (scrollLeft / (scrollWidth - clientWidth)) * 100;

    setScrollY(scrollTop);
    setScrollPercentY(percentY);

    setScrollX(scrollLeft);
    setScrollPercentX(percentX);
  };

  // Create event listener that calls updater handler with throttle
  const onScroll = useThrottleCallback(updateScrollPoints, fps);

  useEventListener('scroll', onScroll);

  // Updates scroll values when component mounted
  useEffect(() => {
    updateScrollPoints();
  }, []);

  return {
    scrollY,
    scrollPercentY,
    scrollX,
    scrollPercentX,
  };
}
