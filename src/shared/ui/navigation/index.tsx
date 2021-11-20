import { CSSProperties } from 'react';

import cx from 'classnames';

import { Link } from '~shared/ui/link';

import classes from './navigation.module.scss';

interface Props {
  routes: Route[];
  size?: 'small' | 'medium';
  className?: string;
  style?: CSSProperties;
}

export const Navigation = ({
  routes,
  size = 'medium',
  className,
  style,
}: Props): JSX.Element => (
  <nav
    className={cx(classes.container, className, {
      [classes.small]: size === 'small',
      [classes.medium]: size === 'medium',
    })}
    style={style}
  >
    <ul className={classes.list}>
      {routes.map(({ href, label, exact = false }) => (
        <li key={label} className={classes.item}>
          <Link href={href} exact={exact}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
