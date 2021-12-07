import { SVGProps } from 'react';

import { cx } from '@emotion/css';

interface Props extends SVGProps<SVGSVGElement> {
  isStroke?: boolean;
}

export const IconBase = ({
  children,
  isStroke = false,
  ...props
}: Props): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cx('icon', {
      'icon--stroke': isStroke,
    })}
    {...props}
  >
    {children}
  </svg>
);
