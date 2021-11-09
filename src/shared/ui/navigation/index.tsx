import { CSSProperties } from 'react';
import cx from 'classnames';
import styles from './navigation.module.scss';
import { Link } from '~shared/ui/link';

interface Props {
  routes: Array<{
    href: string;
    label: string;
  }>;
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
    className={cx([styles.container, className], {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
    })}
    style={style}
  >
    <ul className={styles.list}>
      {routes.map(({ href, label }) => (
        <li key={label} className={styles.item}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
