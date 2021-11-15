import { Logo, Navigation } from '~shared/ui';
import { LikeIcon } from '~shared/ui/icons';

import classes from './header.module.scss';

const routes = [
  {
    href: '/read',
    label: 'Книга',
  },
  {
    href: '/atmosphere',
    label: 'Атмосфера',
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

    <button type="button" className={classes.like}>
      <LikeIcon />
    </button>
  </header>
);
