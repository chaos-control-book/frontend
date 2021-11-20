import { ReactElement } from 'react';

import { Sidebar } from '~widgets';

import { GroupsNavMenu } from '~features/groups-nav-menu';

import classes from './atmosphere-with-sidebar-layout.module.scss';

interface Props {
  children: ReactElement;
}

export const AtmosphereWithSidebarLayout = ({
  children,
}: Props): JSX.Element => (
  <div className={classes.container}>
    <Sidebar
      className={classes.sidebar}
      wrapperClassName={classes.sidebar__wrapper}
      renderMenu={<GroupsNavMenu />}
    />

    {children}
  </div>
);
