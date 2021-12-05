import { ReactElement } from 'react';

import { MainLayout } from './layout';

export const getLayout = (page: ReactElement): ReactElement => (
  <MainLayout>{page}</MainLayout>
);
