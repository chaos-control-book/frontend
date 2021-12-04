import { CSSProperties, HTMLProps, ReactElement, ReactNode } from 'react';

import * as S from './styles';

interface Props extends HTMLProps<HTMLLIElement> {
  accessoryStart?: ReactElement;
  accessoryEnd?: ReactElement;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export const MenuItem = ({
  accessoryStart,
  accessoryEnd,
  className,
  children,
  style,
}: Props): JSX.Element => (
  <S.Container className={className} style={style}>
    {accessoryStart && (
      <S.Accessory position="start">{accessoryStart}</S.Accessory>
    )}

    {children}

    {accessoryEnd && <S.Accessory position="end">{accessoryEnd}</S.Accessory>}
  </S.Container>
);
