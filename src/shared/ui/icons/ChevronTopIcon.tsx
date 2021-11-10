/* eslint-disable react/jsx-props-no-spreading */
import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const ChevronTopIcon = memo(
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
        d="M19.5303 16.0303C19.2374 16.3232 18.7626 16.3232 18.4697 16.0303L12 9.56066L5.53033 16.0303C5.23744 16.3232 4.76256 16.3232 4.46967 16.0303C4.17678 15.7374 4.17678 15.2626 4.46967 14.9697L11.4697 7.96967C11.7626 7.67678 12.2374 7.67678 12.5303 7.96967L19.5303 14.9697C19.8232 15.2626 19.8232 15.7374 19.5303 16.0303Z"
      />
    </svg>
  )
);