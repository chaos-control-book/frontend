import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from '~shared/styles/helpers/functions';
import { headingFont } from '~shared/styles/helpers/mixins';

export const container = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Separator = styled.span`
  ${headingFont(rem(12))};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  pointer-events: none;
  color: var(--color-text-accent);
`;

const Area = styled.a<{
  backgroundColor: string;
}>`
  display: flex;
  align-items: center;
  height: 100%;
  flex-basis: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};

  span {
    position: relative;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.25;
  }
`;

export const LeftArea = styled(Area)`
  justify-content: flex-end;
  padding-right: ${space(2)};

  span {
    &::before {
      content: '';
      position: absolute;
      top: 5px;
      display: block;
      width: 100%;
      height: 32px;
      background-image: url(./read-decor.svg);
      background-position: right;
      background-repeat: no-repeat;
      transform: translateY(-100%);
    }

    &::after {
      content: '';
      position: absolute;
      right: -10px;
      bottom: -10px;
      display: block;
      width: 10px;
      height: 10px;
      background-image: url(./plus-decor.svg);
      background-position: right;
      background-repeat: no-repeat;
    }
  }
`;

export const RightArea = styled(Area)`
  justify-content: flex-start;
  padding-left: ${space(4)};

  span {
    &::before {
      content: '';
      position: absolute;
      left: -5px;
      top: -15px;
      display: block;
      width: 10px;
      height: 10px;
      background-image: url(./plus-decor.svg);
      background-position: right;
      background-repeat: no-repeat;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 3px;
      display: block;
      width: 100%;
      height: 19px;
      background-image: url(./atmosphere-decor.svg);
      background-position: left;
      background-repeat: no-repeat;
      transform: translateY(100%);
    }
  }
`;
