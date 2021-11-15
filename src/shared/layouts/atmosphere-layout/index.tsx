import { ReactElement } from 'react';

import { AtmosphereLayout } from './atmosphere-layout';

export function getAtmosphereLayout(page: ReactElement): ReactElement {
  return <AtmosphereLayout>{page}</AtmosphereLayout>;
}
