import { memo, SVGProps } from 'react';

import { IconBase } from './IconBase';

interface Props extends SVGProps<SVGSVGElement> {
  filled?: boolean;
}

export const BookmarkIcon = memo(({ filled, ...props }: Props): JSX.Element => {
  const renderContent = filled ? (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5V18.5976C19 19.8842 17.4865 20.5737 16.5157 19.7294L12.3281 16.0877C12.14 15.9241 11.86 15.9241 11.6719 16.0877L7.48433 19.7294C6.51351 20.5737 5 19.8842 5 18.5976V5.5Z"
    />
  ) : (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5.5C5 4.67157 5.67157 4 6.5 4H17.5C18.3284 4 19 4.67157 19 5.5V18.5976C19 19.8842 17.4865 20.5737 16.5157 19.7294L12.3281 16.0877C12.14 15.9241 11.86 15.9241 11.6719 16.0877L7.48433 19.7294C6.51351 20.5737 5 19.8842 5 18.5976V5.5ZM6.5 5C6.22386 5 6 5.22386 6 5.5V18.5976C6 19.0264 6.5045 19.2563 6.82811 18.9749L11.0157 15.3331C11.5801 14.8422 12.4199 14.8422 12.9843 15.3331L17.1719 18.9749C17.4955 19.2563 18 19.0264 18 18.5976V5.5C18 5.22386 17.7761 5 17.5 5H6.5Z"
    />
  );

  return <IconBase {...props}>{renderContent}</IconBase>;
});
