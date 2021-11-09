import { FC } from 'react';

import { Header, Footer } from '~widgets';

import styles from './main-layout.module.scss';
import { ScreenFrame } from '~shared/ui';

export const MainLayout: FC = ({ children }) => (
  <div className={styles.container}>
    <ScreenFrame contentTopArea={<Header />} contentBottomArea={<Footer />}>
      <main>{children}</main>
    </ScreenFrame>
  </div>
);
