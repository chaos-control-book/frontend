import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { space } from '~shared/styles/helpers/functions';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const Main = styled.main`
  display: grid;
  grid-template-rows: max-content;
`;

export const nav = css`
  position: sticky;
  top: 0;
  z-index: 1;
  padding-top: ${space(2.5)};
  padding-bottom: ${space(2.5)};
  background-color: var(--color-root-base);
`;
