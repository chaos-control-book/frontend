import { ReactElement } from 'react';

import { MainLayout } from './main-layout';

export function getMainLayout(page: ReactElement): ReactElement {
  return <MainLayout>{page}</MainLayout>;
}
