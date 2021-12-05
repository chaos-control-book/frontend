import { ReactElement } from 'react';

import { AtmosphereLayout } from './layout';

export const getLayout = (page: ReactElement): ReactElement => (
  <AtmosphereLayout>{page}</AtmosphereLayout>
);
