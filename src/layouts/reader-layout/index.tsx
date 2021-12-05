import { ReactElement } from 'react';

import { ReaderLayout } from './layout';

export const getLayout = (page: ReactElement): ReactElement => (
  <ReaderLayout>{page}</ReaderLayout>
);
