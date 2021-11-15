import { ReactElement } from 'react';

import { Header, Footer } from '~widgets';

import { Navigation, ScreenFrame } from '~shared/ui';

import classes from './atmosphere-layout.module.scss';

const routes = [
  {
    href: '/atmosphere/characters',
    label: 'Персонажи',
  },
  {
    href: '/atmosphere/groups',
    label: 'Группировки',
  },
  {
    href: '/atmosphere/races',
    label: 'Расы',
  },
  {
    href: '/atmosphere/maps',
    label: 'Карты',
  },
  {
    href: '/atmosphere/events',
    label: 'События',
  },
  {
    href: '/atmosphere/chronology',
    label: 'Хронология',
  },
];

interface Props {
  children: ReactElement;
}

export const AtmosphereLayout = ({ children }: Props): JSX.Element => (
  <div className={classes.container}>
    <ScreenFrame contentTopArea={<Header />} contentBottomArea={<Footer />}>
      <main className={classes.main}>
        <Navigation
          size="small"
          routes={routes}
          className={classes.main__nav}
        />

        {children}
      </main>
    </ScreenFrame>
  </div>
);
