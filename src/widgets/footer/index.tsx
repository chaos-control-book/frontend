import { Link } from '~shared/ui';

import classes from './footer.module.scss';

export const Footer = (): JSX.Element => (
  <footer className={classes.container}>
    <ul className={classes.links}>
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
