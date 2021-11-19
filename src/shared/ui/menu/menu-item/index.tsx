import { HTMLProps, ReactElement, ReactNode } from 'react';

import cx from 'classnames';

import classes from './menu-item.module.scss';

interface Props extends HTMLProps<HTMLLIElement> {
  accessoryStart?: ReactElement;
  accessoryEnd?: ReactElement;
  className?: string;
  children?: ReactNode;
}

export const MenuItem = ({
  accessoryStart,
  accessoryEnd,
  className,
  children,
  ...props
}: Props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <li className={cx(classes.default)} {...props}>
    {accessoryStart && (
      <span className={classes.accessoryStart}>{accessoryStart}</span>
    )}

    {children}

    {accessoryEnd && (
      <span className={classes.accessoryEnd}>{accessoryEnd}</span>
    )}
  </li>
);
