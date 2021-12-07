import { css } from '@emotion/css';
import { css as reactCss } from '@emotion/react';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from './helpers/functions';

export const Container = styled.div`
  padding-top: ${space(5)};
  padding-bottom: ${space(5)};
`;

const horizontalPaddings = reactCss`
  padding-left: ${space(5)};
  padding-right: ${space(5)};
`;

export const Head = styled.div`
  ${horizontalPaddings};
  margin-bottom: ${space(6)};
`;

export const Subtitle = styled.p`
  margin-top: ${space(2)};
  color: var(--color-text-accent);
`;

export const description = css`
  ${horizontalPaddings.styles};
  width: 90%;
  max-width: ${rem(960)};
  margin-top: ${space(6)};
`;
