import { ReactElement } from 'react';

import { Sidebar } from '~widgets';

import { GroupsNavMenu } from '~features/groups';

import * as S from './styles';

interface Props {
  children: ReactElement;
}

export const AtmosphereWithSidebarLayout = ({
  children,
}: Props): JSX.Element => (
  <S.Container>
    <Sidebar
      className={S.sidebar}
      wrapperClassName={S.sidebarWrapper}
      renderMenu={<GroupsNavMenu />}
    />

    {children}
  </S.Container>
);
