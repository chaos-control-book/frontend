/* eslint-disable react/jsx-props-no-spreading */
import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const LikeIcon = memo(
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
        d="M3.9998 11.2999C4.3864 11.2999 4.6998 11.6133 4.6998 11.9999V17.4999C4.6998 17.8865 4.3864 18.1999 3.9998 18.1999C3.61321 18.1999 3.2998 17.8865 3.2998 17.4999V11.9999C3.2998 11.6133 3.61321 11.2999 3.9998 11.2999Z"
        fill="var(--color-root-accent)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8096 5.93754C11.689 5.87721 11.5765 5.91025 11.5184 5.97199C9.97075 7.61602 8.23287 10.3053 7.54921 11.4007C7.42955 11.5924 7.36631 11.8169 7.36631 12.0539V16.4613C7.36631 16.8846 7.57235 17.2813 7.91858 17.5248L8.68466 18.0634C8.90361 18.2173 9.16474 18.3 9.43239 18.3H14.4678C14.97 18.3 15.4273 18.0107 15.6424 17.5568L18.3514 11.8426C18.603 11.3119 18.2159 10.6999 17.6285 10.6999H12.9713C11.9952 10.6999 11.4275 9.5967 11.9948 8.80245L12.5696 7.99767C13.034 7.34764 12.8077 6.43655 12.0932 6.07931L11.8096 5.93754ZM10.499 5.01239C11.0147 4.46455 11.8076 4.37128 12.4357 4.68534L12.7193 4.82711C14.2032 5.56908 14.6732 7.46134 13.7089 8.8114L13.3599 9.29994H17.6285C19.2439 9.29994 20.3084 10.9827 19.6164 12.4424L16.9075 18.1566C16.4606 19.0991 15.5109 19.7 14.4678 19.7H9.43239C8.8765 19.7 8.33415 19.5284 7.87941 19.2086L7.11333 18.67C6.39424 18.1644 5.96631 17.3404 5.96631 16.4613V12.0539C5.96631 11.566 6.09734 11.0828 6.36154 10.6594C7.04092 9.57089 8.84441 6.77002 10.499 5.01239Z"
      />
    </svg>
  )
);
