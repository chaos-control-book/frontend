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
  ...props
}: Props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <S.Container size={size} {...props}>
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
