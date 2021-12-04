import { ReactElement } from 'react';

import { Header, Footer } from '~widgets';

import { ScreenFrame } from '~shared/ui';

import * as S from './styles';

interface Props {
  children: ReactElement;
}

export const MainLayout = ({ children }: Props): JSX.Element => (
  <S.Container>
    <ScreenFrame contentTopArea={<Header />} contentBottomArea={<Footer />}>
      <main>{children}</main>
    </ScreenFrame>
  </S.Container>
);
