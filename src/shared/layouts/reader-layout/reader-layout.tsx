import { ReactElement } from 'react';

import { Sidebar } from '~widgets';

import { ChaptersNavMenu } from '~features/chapters-nav-menu';

import * as S from './styles';

interface Props {
  children: ReactElement;
}

export const ReaderLayout = ({ children }: Props): JSX.Element => (
  <S.Container>
    <Sidebar showBackButton renderMenu={<ChaptersNavMenu />} />

    <S.Main>{children}</S.Main>
  </S.Container>
);
