import { CSSProperties } from 'react';

import { Link } from '~shared/ui';

import * as S from './styles';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Footer = (props: Props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <S.Container {...props}>
    <S.LinksList>
      <S.LinksListItem>
        <Link href="https://discord.com/">
          <a target="_blank">Discord</a>
        </Link>
      </S.LinksListItem>

      <S.LinksListItem>
        <Link href="https://vk.com/">
          <a target="_blank">Vkontakte</a>
        </Link>
      </S.LinksListItem>
    </S.LinksList>
  </S.Container>
);
