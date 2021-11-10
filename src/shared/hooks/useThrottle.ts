import { useRef } from 'react';

import { throttle, ThrottleSettings } from 'lodash-es';

export function useThrottle<
  C extends (...args: any) => any = (...args: any) => any
>(callback: C, delay = 300, options?: ThrottleSettings) {
  const throttled = useRef(throttle(callback, delay, options));

  return throttled.current;
}
