import styled from '@emotion/styled';
import { rem } from 'polished';
import styledMap from 'styled-map';

import { space } from '~shared/styles/helpers/functions';
import { headingFont } from '~shared/styles/helpers/mixins';

export const Container = styled.nav<{
  size?: 'small' | 'medium';
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  max-height: ${styledMap('size', {
    small: 'var(--navigation-small-height)',
    medium: 'var(--navigation-medium-height)',
  })};
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: ${space(5)};
`;

export const ListItem = styled.li<{
  size?: 'small' | 'medium';
}>`
  ${headingFont()};
  font-size: ${styledMap('size', {
    small: rem(14),
    medium: rem(16),
  })};
`;
