import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from './helpers/functions';
import { textFont } from './helpers/mixins';

export const container = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  ${textFont(rem(24), 500)};
`;

export const Text = styled.h2`
  ${textFont(rem(17))};
  margin-top: ${space(1.5)};
`;
