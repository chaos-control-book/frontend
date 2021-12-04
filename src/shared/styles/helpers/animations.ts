import { css } from '@emotion/react';

export const grow = (scale: number) => css`
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(${scale});
  }
`;

export const rotate = (degrees: number) => css`
  animation: spin 0.5s ease-in-out 0s 1 forwards normal;
  transition-duration: 0.5s;
  transform: rotate(${degrees}deg);
`;
