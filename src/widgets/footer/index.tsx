import styles from './footer.module.scss';
import { Link } from '~shared/ui';

export const Footer = (): JSX.Element => (
  <footer className={styles.container}>
    <ul className={styles.links}>
      <li>
        <Link href="https://discord.com/">
          <a target="_blank">Discord</a>
        </Link>
      </li>
      <li>
        <Link href="https://vk.com/">
          <a target="_blank">Vkontakte</a>
        </Link>
      </li>
    </ul>
  </footer>
);
