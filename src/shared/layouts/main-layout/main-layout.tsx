import { ReactElement } from 'react';

import { Header, Footer } from '~widgets';

import { ScreenFrame } from '~shared/ui';

import classes from './main-layout.module.scss';

interface Props {
  children: ReactElement;
}

export const MainLayout = ({ children }: Props): JSX.Element => (
  <div className={classes.container}>
    <ScreenFrame contentTopArea={<Header />} contentBottomArea={<Footer />}>
      <main className={classes.main}>{children}</main>
    </ScreenFrame>
  </div>
);
