import { ReactElement } from 'react';

import { Sidebar } from '~shared/ui';

import classes from './reader-layout.module.scss';

interface Props {
  children: ReactElement;
}

export const ReaderLayout = ({ children }: Props): JSX.Element => (
  <div className={classes.container}>
    <Sidebar />

    <main className={classes.content}>{children}</main>
  </div>
);
