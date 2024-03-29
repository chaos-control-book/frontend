import { css } from '@emotion/react';

export const globalStyles = css`
  :root {
    color-scheme: dark;
  }

  html {
    min-width: 320px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    overflow-x: hidden;
    background-color: var(--color-root-base);
  }

  body,
  #__next {
    min-height: 100vh;
  }

  .icon {
    fill: currentColor;
    pointer-events: none;
    user-select: none;

    &--stroke {
      fill: transparent;
      stroke: currentColor;
    }
  }
`;
