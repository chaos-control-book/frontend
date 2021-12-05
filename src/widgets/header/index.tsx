import { CSSProperties, ReactElement } from 'react';

import { ChapterKeepReading } from '~features/chapters';

import { PAGES_URLS } from '~shared/config/urls';
import { Button, Logo, Navigation } from '~shared/ui';
import { LikeIcon } from '~shared/ui/icons';

import * as S from './styles';

interface Props {
  contentActions?: ReactElement;
  className?: string;
  style?: CSSProperties;
}

const routes: Route[] = [
  {
    href: PAGES_URLS.READ,
    label: 'Книга',
  },
  {
    href: PAGES_URLS.ATMOSPHERE.HOME,
    label: 'Атмосфера',
    exact: false,
  },
  // {
  //   href: PAGES_URLS.AUTHORS,
  //   label: 'Авторы',
  // },
];

export const Header = ({ contentActions, ...props }: Props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <S.Container {...props}>
    <Logo />

    <Navigation routes={routes} className={S.nav} />

    <S.Actions>
      {contentActions ?? (
        <>
          <ChapterKeepReading />

          <Button
            accessoryStart={<LikeIcon />}
            className={S.actionsLikeButton}
          />
        </>
      )}
    </S.Actions>
  </S.Container>
);
