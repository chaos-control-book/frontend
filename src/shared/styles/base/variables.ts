import { css } from '@emotion/react';
import { rem } from 'polished';

export const variablesStyles = css`
  :root {
    --color-white: #ffffff;
    --color-black: #000000;

    --color-root-accent: #1bc0f4;
    --color-root-complement: #9646fb;
    --color-root-base: #0b0b0b;
    --color-root-faint: #121212;

    --color-text-accent: #21caff;
    --color-text-base: #eef2f8;
    --color-text-faint: #b2d5ee;
    --color-text-tertiary: #6e8291;

    --color-icon-base: #edeeef;
    --color-icon-accent: #0ebbf1;
    --color-icon-faint: #b2d5ee;

    --color-line-base: #21282a;
    --color-line-accent: #2b4f5b;

    --header-height: ${rem(80)};

    --sidebar-width: minmax(20rem, 1fr);

    --navigation-medium-height: ${rem(80)};
    --navigation-small-height: ${rem(60)};
  }
`;
