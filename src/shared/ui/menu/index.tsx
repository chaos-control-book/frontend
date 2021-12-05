import { CSSProperties, ReactNode } from 'react';

import { MenuItem } from './menu-item';
import * as S from './styles';

interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Menu = ({ children, ...props }: Props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <S.Container {...props}>{children}</S.Container>
);

Menu.Item = MenuItem;
