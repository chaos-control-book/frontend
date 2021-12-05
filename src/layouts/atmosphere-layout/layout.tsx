import { ReactElement } from 'react';

import { Header, Footer } from '~widgets';

import { PAGES_URLS } from '~shared/config/urls';
import { Navigation, ScreenFrame } from '~shared/ui';

import * as S from './styles';

const { ATMOSPHERE } = PAGES_URLS;

const routes: Route[] = [
  // {
  //   href: ATMOSPHERE.CHARACTERS,
  //   label: 'Персонажи',
  // },
  {
    href: ATMOSPHERE.GROUPS,
    label: 'Группировки',
  },
  // {
  //   href: ATMOSPHERE.RACES,
  //   label: 'Расы',
  // },
  // {
  //   href: ATMOSPHERE.MAPS,
  //   label: 'Карты',
  // },
  // {
  //   href: ATMOSPHERE.EVENTS,
  //   label: 'События',
  // },
  // {
  //   href: ATMOSPHERE.CHRONOLOGY,
  //   label: 'Хронология',
  // },
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
