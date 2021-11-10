import { CSSProperties } from 'react';

import cx from 'classnames';

import { useChapters } from '~shared/api/chapter';
import { useWindowScroll } from '~shared/hooks/useWindowScroll';
import { Button } from '~shared/ui';
import { ChevronLeftIcon } from '~shared/ui/icons';
import { Link } from '~shared/ui/link';
import { Logo } from '~shared/ui/logo';

import classes from './sidebar.module.scss';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Sidebar = ({ className, style }: Props): JSX.Element => {
  const { data: chapters, error } = useChapters();

  const { scrollPercentY } = useWindowScroll();

  const renderNavContent = () => {
    if (error) {
      return <p>ошибка загрузки</p>;
    }

    if (!chapters) {
      return <p>загрузка...</p>;
    }

    return (
      <ol className={classes.menu__list}>
        {chapters.map((c) => (
          <li key={c.id}>
            <Link href={`/read/${c.slug}`}>
              <a>{c.title}</a>
            </Link>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <aside className={cx([classes.container, className])} style={style}>
      <div className={classes.wrapper}>
        <Button
          as="link"
          href="/"
          accessoryStart={<ChevronLeftIcon />}
          className={classes.back}
        >
          Вернуться на сайт
        </Button>

        <nav
          className={cx(classes.menu, {
            [classes.menu_hidden]: scrollPercentY > 35,
          })}
        >
          {renderNavContent()}
        </nav>
      </div>
    </aside>
  );
};
