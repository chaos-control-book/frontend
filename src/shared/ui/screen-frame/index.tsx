import { CSSProperties, ReactNode } from 'react';

import cx from 'classnames';

import classes from './screen-frame.module.scss';

interface Props {
  contentTopArea?: ReactNode;
  contentBottomArea?: ReactNode;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

export const ScreenFrame = ({
  contentTopArea,
  contentBottomArea,
  style,
  className,
  children,
}: Props): JSX.Element => (
  <div className={cx(classes.container, className)} style={style}>
    <div className={classes.topArea}>{contentTopArea}</div>

    <div className={classes.rightArea} />

    <div className={classes.bottomArea}>{contentBottomArea}</div>

    <div className={classes.leftArea} />

    <div className={classes.content}>
      <div
        className={cx(
          classes.item,
          classes.topCrosshair,
          classes.leftCrosshair
        )}
      />
      <div
        className={cx(
          classes.item,
          classes.topCrosshair,
          classes.rightCrosshair
        )}
      />
      <div
        className={cx(
          classes.item,
          classes.bottomCrosshair,
          classes.rightCrosshair
        )}
      />
      <div
        className={cx(
          classes.item,
          classes.bottomCrosshair,
          classes.leftCrosshair
        )}
      />

      {children}
    </div>
  </div>
);
