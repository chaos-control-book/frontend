import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from '~shared/styles/helpers/functions';

export const Container = styled.div`
  --sidebar-width: ${rem(340)};

  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  grid-template-areas: 'sidebar .';
  width: 100%;
  height: 100%;
`;

export const sidebar = css`
  padding: 0 ${space(6)};
  background-color: var(--color-root-faint);
`;

export const sidebarWrapper = css`
  top: var(--navigation-small-height);
  padding: 0;
`;
