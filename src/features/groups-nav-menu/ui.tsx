import { useGroups } from '~shared/api/groups';
import { Link, Menu, Skeleton } from '~shared/ui';

import classes from './ui.module.scss';

export const GroupsNavMenu = (): JSX.Element => {
  const { data: groups, error } = useGroups();

  const renderNavContent = () => {
    if (error) {
      return <p>Error</p>;
    }

    if (!groups) {
      return <Skeleton.Menu itemsCount={5} />;
    }

    return (
      <Menu className={classes.menu__list}>
        {groups.map((g) => (
          <Menu.Item key={g.id}>
            <Link href={`/atmosphere/groups/${g.slug}`}>
              <a>{g.title}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  return <nav className={classes.menu}>{renderNavContent()}</nav>;
};
