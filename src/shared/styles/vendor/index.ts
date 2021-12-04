import { css } from '@emotion/react';

import { normalizeStyles } from './normalize';
import { nprogressStyles } from './nprogress';
import { resetStyles } from './reset';

export const vendorStyles = css(normalizeStyles, resetStyles, nprogressStyles);
