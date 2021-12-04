import { KeepReadingButton } from '~features/keep-reading';

import { Button, Logo, Navigation } from '~shared/ui';
import { LikeIcon } from '~shared/ui/icons';

import * as S from './styles';

const routes: Route[] = [
  {
    href: '/read',
    label: 'Книга',
  },
  {
    href: '/atmosphere',
    label: 'Атмосфера',
    exact: false,
  },
  {
    href: '/authors',
    label: 'Авторы',
  },
];

export const Header = (): JSX.Element => (
  <S.Container>
    <Logo />

    <Navigation routes={routes} className={S.nav} />

    <S.Actions>
      <KeepReadingButton />

      <Button accessoryStart={<LikeIcon />} className={S.actionsLikeButton} />
    </S.Actions>
  </S.Container>
);
