import { CSSProperties, ReactNode } from 'react';
import cx from 'classnames';

import styles from './screen-frame.module.scss';

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
  <div className={cx([[className], styles.container])} style={style}>
    <div className={styles.topArea}>{contentTopArea}</div>

    <div className={styles.rightArea} />

    <div className={styles.bottomArea}>{contentBottomArea}</div>

    <div className={styles.leftArea} />

    <div className={styles.content}>
      <div
        className={cx([styles.item, styles.topCrosshair, styles.leftCrosshair])}
      />
      <div
        className={cx([
          styles.item,
          styles.topCrosshair,
          styles.rightCrosshair,
        ])}
      />
      <div
        className={cx([
          styles.item,
          styles.bottomCrosshair,
          styles.rightCrosshair,
        ])}
      />
      <div
        className={cx([
          styles.item,
          styles.bottomCrosshair,
          styles.leftCrosshair,
        ])}
      />

      {children}
    </div>
  </div>
);
