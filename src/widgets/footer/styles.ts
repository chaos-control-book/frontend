import styled from '@emotion/styled';

import { space } from '~shared/styles/helpers/functions';
import { headingFont } from '~shared/styles/helpers/mixins';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  height: 100%;
  padding: ${space(1.5, 2)};
`;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${space(2)};
  height: 100%;
  margin-left: auto;
`;

export const LinksListItem = styled.li`
  a {
    ${headingFont()};
    color: var(--color-text-tertiary);
  }
`;
