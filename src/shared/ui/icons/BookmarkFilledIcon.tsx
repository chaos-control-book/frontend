/* eslint-disable react/jsx-props-no-spreading */
import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const BookmarkFilledIcon = memo(
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
        d="M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5V18.5976C19 19.8842 17.4865 20.5737 16.5157 19.7294L12.3281 16.0877C12.14 15.9241 11.86 15.9241 11.6719 16.0877L7.48433 19.7294C6.51351 20.5737 5 19.8842 5 18.5976V5.5Z"
      />
    </svg>
  )
);
