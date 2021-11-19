import { HTMLProps, ReactNode } from 'react';

import cx from 'classnames';

import { MenuItem } from './menu-item';
import classes from './menu.module.scss';

interface Props extends HTMLProps<HTMLUListElement> {
  className?: string;
  children?: ReactNode;
}

export const Menu = ({ className, children, ...props }: Props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ul className={cx(classes.default, className)} {...props}>
    {children}
  </ul>
);

Menu.Item = MenuItem;
