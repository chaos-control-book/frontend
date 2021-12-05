import { ReactElement } from 'react';

import { Header, Footer } from '~widgets';

import { ScreenFrame } from '~shared/ui';

import * as S from './styles';

interface Props {
  children: ReactElement;
}

const ContentTopArea = () => <Header />;

const ContentBottomArea = () => <Footer />;

export const MainLayout = ({ children }: Props): JSX.Element => (
  <S.Container>
    <ScreenFrame
      contentTopArea={<ContentTopArea />}
      contentBottomArea={<ContentBottomArea />}
    >
      <main>{children}</main>
    </ScreenFrame>
  </S.Container>
);
