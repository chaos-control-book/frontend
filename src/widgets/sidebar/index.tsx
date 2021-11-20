import { CSSProperties, ReactElement } from 'react';

import cx from 'classnames';

import { Button } from '~shared/ui';
import { ChevronLeftIcon } from '~shared/ui/icons';

import classes from './sidebar.module.scss';

interface Props {
  renderMenu: ReactElement;
  showBackButton?: boolean;
  className?: string;
  wrapperClassName?: string;
  style?: CSSProperties;
}

export const Sidebar = ({
  renderMenu,
  showBackButton,
  className,
  wrapperClassName,
  style,
}: Props): JSX.Element => (
  <aside className={cx(classes.container, className)} style={style}>
    <div className={cx(classes.wrapper, wrapperClassName)}>
      {showBackButton && (
        <Button
          as="link"
          href="/"
          accessoryStart={<ChevronLeftIcon />}
          className={classes.backButton}
        >
          Вернуться на сайт
        </Button>
      )}

      {renderMenu}
    </div>
  </aside>
);
