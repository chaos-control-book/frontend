import styled from '@emotion/styled';

import { space } from '~shared/styles/helpers/functions';
import { headingFont } from '~shared/styles/helpers/mixins';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  ${headingFont()};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${space(2)};
`;
