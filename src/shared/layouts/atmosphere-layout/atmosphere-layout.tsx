import { ReactElement } from 'react';

import { Header, Footer } from '~widgets';

import { Navigation, ScreenFrame } from '~shared/ui';

import * as S from './styles';

const routes: Route[] = [
  {
    href: 'atmosphere/characters',
    label: 'Персонажи',
  },
  {
    href: 'atmosphere/groups',
    label: 'Группировки',
  },
  {
    href: 'atmosphere/races',
    label: 'Расы',
  },
  {
    href: 'atmosphere/maps',
    label: 'Карты',
  },
  {
    href: 'atmosphere/events',
    label: 'События',
  },
  {
    href: 'atmosphere/chronology',
    label: 'Хронология',
  },
];

interface Props {
  children: ReactElement;
}

export const AtmosphereLayout = ({ children }: Props): JSX.Element => (
  <S.Container>
    <ScreenFrame contentTopArea={<Header />} contentBottomArea={<Footer />}>
      <S.Main>
        <Navigation size="small" routes={routes} className={S.nav} />

        {children}
      </S.Main>
    </ScreenFrame>
  </S.Container>
);
