import styled from '@emotion/styled';
import { rem } from 'polished';

import { space } from '~shared/styles/helpers/functions';
import {
  animation,
  letterSpacing,
  textFont,
} from '~shared/styles/helpers/mixins';

export const Menu = styled.nav<{
  $hidden: boolean;
}>`
  ${textFont(rem(16), 500, 1.4)};
  ${letterSpacing};
  ${animation('opacity', 500, 'ease-in-out')};

  padding-top: ${space(7)};
  padding-bottom: ${space(7)};
  padding-left: ${space(3)};

  ${({ $hidden }) =>
    $hidden &&
    `
      opacity: 0;

      &:hover {
        transition-duration: 0.2s;
        opacity: 1;
      }
    `};
`;

export const ChapterNumber = styled.span`
  display: inline-block;
  min-width: ${space(6.5)};
  padding-right: ${space(1)};
  text-align: start;
  color: currentColor;
`;
