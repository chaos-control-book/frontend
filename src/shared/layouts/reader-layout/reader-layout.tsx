import { ReactElement } from 'react';

import { Sidebar } from '~widgets';

import { ChaptersNavMenu } from '~features/chapters-nav-menu';

import classes from './reader-layout.module.scss';

interface Props {
  children: ReactElement;
}

export const ReaderLayout = ({ children }: Props): JSX.Element => (
  <div className={classes.container}>
    <Sidebar showBackButton renderMenu={<ChaptersNavMenu />} />

    <main className={classes.content}>{children}</main>
  </div>
);
