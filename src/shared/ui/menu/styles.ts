import styled from '@emotion/styled';

import { space } from '~shared/styles/helpers/functions';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${space(3)};
  width: 100%;
  //counter-reset: item;
`;
