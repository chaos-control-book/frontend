import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from '~shared/styles/helpers/functions';

export const Container = styled.div`
  --content-width: minmax(400px, 1fr);
  --right-space-width: minmax(5rem, 0.15fr);

  display: grid;
  grid-template-columns:
    var(--sidebar-width)
    var(--content-width)
    var(--right-space-width);
  grid-template-areas: 'sidebar content .';
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--color-root-base);

  @media screen and (max-width: ${rem(1280)}) {
    --right-space-width: ${space(4)};
  }

  @media screen and (max-width: ${rem(1024)}) {
    --right-space-width: ${space(3)};
  }

  @media screen and (min-width: ${rem(1920)}) {
    --sidebar-width: 1fr;
    --content-width: minmax(400px, 2fr);
    --right-space-width: 0.75fr;
  }
`;

export const Main = styled.main`
  position: relative;
  grid-area: content;
  background-color: var(--color-root-faint);
`;
