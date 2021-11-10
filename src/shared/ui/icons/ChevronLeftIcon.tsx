/* eslint-disable react/jsx-props-no-spreading */
import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const ChevronLeftIcon = memo(
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
        d="M16.0303 4.46967C16.3232 4.76256 16.3232 5.23744 16.0303 5.53033L9.56066 12L16.0303 18.4697C16.3232 18.7626 16.3232 19.2374 16.0303 19.5303C15.7374 19.8232 15.2626 19.8232 14.9697 19.5303L7.96967 12.5303C7.67678 12.2374 7.67678 11.7626 7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z"
      />
    </svg>
  )
);
