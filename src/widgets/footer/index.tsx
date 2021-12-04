import { Link } from '~shared/ui';

import * as S from './styles';

export const Footer = (): JSX.Element => (
  <S.Container>
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
