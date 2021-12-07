import { CSSProperties, ReactElement, ReactNode } from 'react';

import { cx } from '@emotion/css';

import * as S from './styles';

interface Props {
  contentTopArea?: ReactNode;
  contentBottomArea?: ReactNode;
  children?: ReactElement;
  className?: string;
  style?: CSSProperties;
}

export const ScreenFrame = ({
  contentTopArea,
  contentBottomArea,
  children,
  ...props
}: Props): JSX.Element => (
  <S.Container {...props}>
    <S.TopArea>{contentTopArea}</S.TopArea>

    <S.LeftArea />

    <S.RightArea />

    <S.BottomArea>{contentBottomArea}</S.BottomArea>

    <S.Content>
      <S.Crosshair className={cx(S.topCrosshair, S.leftCrosshair)} />
      <S.Crosshair className={cx(S.topCrosshair, S.rightCrosshair)} />
      <S.Crosshair className={cx(S.bottomCrosshair, S.rightCrosshair)} />
      <S.Crosshair className={cx(S.bottomCrosshair, S.leftCrosshair)} />

      {children}
    </S.Content>
  </S.Container>
);
