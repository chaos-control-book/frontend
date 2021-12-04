/* eslint-disable react/jsx-props-no-spreading */
import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  up?: boolean;
  right?: boolean;
  down?: boolean;
  left?: boolean;
}

export const ChevronIcon = memo(
  ({ up, right, down, left, ...props }: Props): JSX.Element => {
    const renderContent = () => {
      if (up) {
        return (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5303 16.0303C19.2374 16.3232 18.7626 16.3232 18.4697 16.0303L12 9.56066L5.53033 16.0303C5.23744 16.3232 4.76256 16.3232 4.46967 16.0303C4.17678 15.7374 4.17678 15.2626 4.46967 14.9697L11.4697 7.96967C11.7626 7.67678 12.2374 7.67678 12.5303 7.96967L19.5303 14.9697C19.8232 15.2626 19.8232 15.7374 19.5303 16.0303Z"
          />
        );
      }

      if (right) {
        return (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.96967 19.5303C7.67678 19.2374 7.67678 18.7626 7.96967 18.4697L14.4393 12L7.96967 5.53033C7.67678 5.23744 7.67678 4.76256 7.96967 4.46967C8.26256 4.17678 8.73744 4.17678 9.03033 4.46967L16.0303 11.4697C16.3232 11.7626 16.3232 12.2374 16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z"
          />
        );
      }

      if (down) {
        return (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.46967 7.96967C4.76256 7.67678 5.23744 7.67678 5.53033 7.96967L12 14.4393L18.4697 7.96967C18.7626 7.67678 19.2374 7.67678 19.5303 7.96967C19.8232 8.26256 19.8232 8.73744 19.5303 9.03033L12.5303 16.0303C12.2374 16.3232 11.7626 16.3232 11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
          />
        );
      }

      if (left) {
        return (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0303 4.46967C16.3232 4.76256 16.3232 5.23744 16.0303 5.53033L9.56066 12L16.0303 18.4697C16.3232 18.7626 16.3232 19.2374 16.0303 19.5303C15.7374 19.8232 15.2626 19.8232 14.9697 19.5303L7.96967 12.5303C7.67678 12.2374 7.67678 11.7626 7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z"
          />
        );
      }

      return null;
    };

    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        {...props}
      >
        {renderContent()}
      </svg>
    );
  }
);
