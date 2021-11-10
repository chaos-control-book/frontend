import { CSSProperties } from 'react';

import cx from 'classnames';

import { Link } from '~shared/ui/link';

import classes from './logo.module.scss';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Logo = ({ className, style }: Props): JSX.Element => (
  <Link href="/" activeClassName="">
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <a className={cx([classes.logo, className])} style={style}>
      Контроль Хаоса
    </a>
  </Link>
);
