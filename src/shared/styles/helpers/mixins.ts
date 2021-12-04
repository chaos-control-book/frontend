/*= =======================
MIXINS
========================= */

import { css } from '@emotion/react';

export const buttonReset = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  outline: 0;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  font-size: 14px;
  text-decoration: none;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
`;

export const headingFont = (fontSize = '1rem', lineHeight = 1.25) => css`
  font-family: 'Russo One', sans-serif;
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;

export const textFont = (
  fontSize = '1rem',
  fontWeight = 400,
  lineHeight = 1.25
) => css`
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
`;

export const letterSpacing = css`
  letter-spacing: 0.03em;
`;

export const animation = (
  property = 'all',
  duration = 150,
  easing = 'ease-in-out',
  delay = 0
) => css`
  transition-property: ${property};
  transition-duration: ${duration}ms;
  transition-timing-function: ${easing};
  transition-delay: ${delay}ms;
`;
