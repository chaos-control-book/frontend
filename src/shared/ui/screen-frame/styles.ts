import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { space } from '~shared/styles/helpers/functions';

export const Container = styled.div`
  grid-template-columns: ${space(5)} 1fr ${space(5)};
  grid-template-rows: var(--header-height) 1fr ${space(5)};
  grid-template-areas:
    'area-left area-top area-right'
    'area-left content area-right'
    'area-left area-bottom area-right';
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const TopArea = styled.div`
  width: 100%;
  height: var(--header-height);
  grid-area: area-top;
  border-left: 1px solid var(--color-line-base);
`;

export const RightArea = styled.div`
  width: ${space(5)};
  height: calc(100% - var(--header-height));
  grid-area: area-right;
  align-self: end;
  border-top: 1px solid var(--color-line-base);
`;

export const BottomArea = styled.div`
  width: 100%;
  height: ${space(5)};
  grid-area: area-bottom;
  border-right: 1px solid var(--color-line-base);
`;

export const LeftArea = styled.div`
  width: ${space(5)};
  height: calc(100% - ${space(5)});
  grid-area: area-left;
  border-bottom: 1px solid var(--color-line-base);
`;

export const Content = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: content;
  width: 100%;
  border: 1px solid var(--color-line-base);

  > main {
    width: 100%;
    height: 100%;
  }
`;

export const Crosshair = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9px;
  height: 9px;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #c4c4c4;
  }

  &::before {
    width: 9px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 9px;
  }
`;

export const topCrosshair = css`
  top: -5px;
`;

export const rightCrosshair = css`
  right: -5px;
`;

export const bottomCrosshair = css`
  bottom: -5px;
`;

export const leftCrosshair = css`
  left: -5px;
`;
