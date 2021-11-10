import { ReactElement } from 'react';

import { ReaderLayout } from './reader-layout';

export function getReaderLayout(page: ReactElement): ReactElement {
  return <ReaderLayout>{page}</ReaderLayout>;
}
