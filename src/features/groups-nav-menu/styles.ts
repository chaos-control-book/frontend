import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from '~shared/styles/helpers/functions';
import { letterSpacing, textFont } from '~shared/styles/helpers/mixins';

export const Menu = styled.nav`
  ${textFont(rem(20), 400, 1.4)};
  ${letterSpacing};
  padding-top: ${space(6)};
  padding-bottom: ${space(6)};
`;

export const menuList = css`
  gap: ${space(5)};
`;
