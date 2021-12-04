import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { space } from '~shared/styles/helpers/functions';

export const Container = styled.aside`
  grid-area: sidebar;
  width: var(--sidebar-width);
  min-width: var(--sidebar-width);
  height: 100%;
  padding: ${space(0, 4, 0, 5)};
`;

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  padding-top: ${space(2.5)};
  padding-bottom: ${space(4)};
`;

export const backButton = css`
  &:not(:hover) {
    color: var(--color-text-tertiary);
  }
`;
