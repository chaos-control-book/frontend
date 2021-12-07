import { CSSProperties, ReactElement, ReactNode } from 'react';

import * as S from './styles';

interface Props {
  accessoryStart?: ReactElement;
  accessoryEnd?: ReactElement;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const MenuItem = ({
  accessoryStart,
  accessoryEnd,
  children,
  ...props
}: Props): JSX.Element => (
  <S.Container {...props}>
    {accessoryStart && (
      <S.Accessory position="start">{accessoryStart}</S.Accessory>
    )}

    {children}

    {accessoryEnd && <S.Accessory position="end">{accessoryEnd}</S.Accessory>}
  </S.Container>
);
