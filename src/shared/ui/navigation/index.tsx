import { CSSProperties } from 'react';

import { Link } from '~shared/ui/link';

import * as S from './styles';

interface Props {
  routes: Route[];
  size?: 'small' | 'medium';
  className?: string;
  style?: CSSProperties;
}

export const Navigation = ({
  routes,
  size = 'medium',
  className,
  style,
}: Props): JSX.Element => (
  <S.Container size={size} className={className} style={style}>
    <S.List>
      {routes.map(({ href, label, exact = false }) => (
        <S.ListItem key={label} size={size}>
          <Link href={href} exact={exact}>
            <a>{label}</a>
          </Link>
        </S.ListItem>
      ))}
    </S.List>
  </S.Container>
);
