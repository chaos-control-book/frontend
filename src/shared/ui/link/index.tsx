import { Children, cloneElement, ReactElement } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

import cx from 'classnames';

import classes from './link.module.scss';

export interface LinkProps extends NextLinkProps {
  activeClassName?: string;
  children: ReactElement;
}

export const Link = ({
  children,
  activeClassName = classes.active,
  ...props
}: LinkProps): JSX.Element => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NextLink passHref {...props}>
      {cloneElement(child, {
        className: cx([classes.default, className]) || null,
      })}
    </NextLink>
  );
};
