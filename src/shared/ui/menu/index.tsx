import { ReactNode } from 'react';

import { MenuItem } from './menu-item';
import * as S from './styles';

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Menu = ({ className, children }: Props): JSX.Element => (
  <S.Default className={className}>{children}</S.Default>
);

Menu.Item = MenuItem;
