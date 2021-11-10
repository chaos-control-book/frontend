/* eslint-disable react/jsx-props-no-spreading */
import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const LocationIcon = memo(
  (props: Props): JSX.Element => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon"
      {...props}
    >
      <path d="M18.5732 4.11535L4.94202 10.4066C3.36934 11.1407 3.89356 13.4473 5.57115 13.4473H11.3383V19.2144C11.3383 20.892 13.645 21.4165 14.3791 19.8435L20.6704 6.21255C21.1947 4.95397 19.8315 3.59081 18.5732 4.11535V4.11535Z" />
    </svg>
  )
);
