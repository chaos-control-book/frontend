import { css } from '@emotion/react';

import { baseStyles } from './base';
import { vendorStyles } from './vendor';

export const globalStyles = css(baseStyles, vendorStyles);
