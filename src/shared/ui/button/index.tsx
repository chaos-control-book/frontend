import { HTMLProps, ReactNode } from 'react';

import cx from 'classnames';

import { Link } from '~shared/ui/link';

import classes from './button.module.scss';

interface Props extends HTMLProps<HTMLButtonElement> {
  accessoryEnd?: ReactNode;
  accessoryStart?: ReactNode;
  variant?: 'text' | 'filled';
  as?: 'button' | 'link';
  href?: string;
}

export const Button = ({
  accessoryEnd,
  accessoryStart,
  variant = 'text',
  as = 'button',
  href,
  className,
  children,
  ...props
}: Props): JSX.Element => {
  const classNames = cx([classes.container, className], {
    [classes.container_onlyIcon]: !children,
    [classes.container_text]: variant === 'text',
    [classes.container_filled]: variant === 'filled',
  });

  const renderContent = (
    <>
      {accessoryStart && (
        <span className={classes.container__startIcon}>{accessoryStart}</span>
      )}

      {children && <span className={classes.container__text}>{children}</span>}

      {accessoryEnd && (
        <span className={classes.container__endIcon}>{accessoryEnd}</span>
      )}
    </>
  );

  if (as === 'link') {
    if (!href) {
      throw new Error(
        "Prop 'as' with value 'link' must be passed with prop 'href'."
      );
    }

    return (
      <Link href={href}>
        <a className={classNames}>{renderContent}</a>
      </Link>
    );
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button className={classNames} {...props} type="button">
      {renderContent}
    </button>
  );
};
