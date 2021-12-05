import styled from '@emotion/styled';

import { space } from '~shared/styles/helpers/functions';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${space(0.5)};
  margin-left: ${space(2)};
`;
