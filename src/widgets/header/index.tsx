import styles from './header.module.scss';
import { Link, Navigation } from '~shared/ui';
import { LikeIcon } from '~shared/ui/icons';

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
  <header className={styles.container}>
    <Link href="/">
      <a className={styles.logo}>Контроль Хаоса</a>
    </Link>

    <Navigation routes={routes} />

    <button type="button" className={styles.like}>
      <LikeIcon />
    </button>
  </header>
);
