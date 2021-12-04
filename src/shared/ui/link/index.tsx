import { Children, cloneElement, ReactElement } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

import { cx } from '@emotion/css';

import * as S from './styles';

export interface LinkProps extends NextLinkProps {
  activeClassName?: string;
  children: ReactElement;
  exact?: boolean;
}

export const Link = ({
  children,
  activeClassName = S.active,
  exact = true,
  ...props
}: LinkProps): JSX.Element => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';
  const isActiveLink = () => {
    if (exact) {
      return asPath === props.href || asPath === props.as;
    }

    return (
      asPath.includes(props.as as string) ||
      asPath.includes(props.href as string)
    );
  };

  const className = isActiveLink()
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NextLink passHref {...props}>
      {cloneElement(child, {
        className: cx(S.container, className) || null,
      })}
    </NextLink>
  );
};
