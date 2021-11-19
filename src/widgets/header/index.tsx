import { KeepReadingButton } from '~features/keep-reading';

import { Button, Logo, Navigation } from '~shared/ui';
import { LikeIcon } from '~shared/ui/icons';

import classes from './header.module.scss';

const routes: Route[] = [
  {
    href: '/read',
    label: 'Книга',
  },
  {
    href: '/atmosphere',
    label: 'Атмосфера',
    exact: true,
  },
  {
    href: '/authors',
    label: 'Авторы',
  },
];

export const Header = (): JSX.Element => (
  <header className={classes.container}>
    <Logo />

    <Navigation routes={routes} className={classes.nav} />

    <div className={classes.actions}>
      <KeepReadingButton />

      <Button className={classes.actions__like} accessoryStart={<LikeIcon />} />
    </div>
  </header>
);
