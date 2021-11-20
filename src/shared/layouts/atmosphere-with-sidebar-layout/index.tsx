import { ReactElement } from 'react';

import { AtmosphereLayout } from '~shared/layouts/atmosphere-layout/atmosphere-layout';

import { AtmosphereWithSidebarLayout } from './atmosphere-with-sidebar-layout';

export function getAtmosphereWithSidebarLayout(
  page: ReactElement
): ReactElement {
  return (
    <AtmosphereLayout>
      <AtmosphereWithSidebarLayout>{page}</AtmosphereWithSidebarLayout>
    </AtmosphereLayout>
  );
}
