import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { grow } from '~shared/styles/helpers/animations';
import { space } from '~shared/styles/helpers/functions';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  padding: ${space(3, 4)};
`;

export const nav = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space(0.5)};
`;

export const actionsLikeButton = css`
  ${grow(1.5)}
`;
