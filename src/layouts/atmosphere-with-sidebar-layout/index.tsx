import { ReactElement } from 'react';

import { AtmosphereLayout } from '~layouts/atmosphere-layout/layout';

import { AtmosphereWithSidebarLayout } from './layout';

export const getLayout = (page: ReactElement): ReactElement => (
  <AtmosphereLayout>
    <AtmosphereWithSidebarLayout>{page}</AtmosphereWithSidebarLayout>
  </AtmosphereLayout>
);
