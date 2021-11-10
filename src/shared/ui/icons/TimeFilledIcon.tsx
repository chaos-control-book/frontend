/* eslint-disable react/jsx-props-no-spreading */
import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const TimeFilledIcon = memo(
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12.9477L14.357 15.7659C14.78 16.121 15.4108 16.066 15.7659 15.643C16.121 15.22 16.066 14.5892 15.643 14.2341L13 12.0154V8Z"
        fill="#0EBBF1"
      />
    </svg>
  )
);
