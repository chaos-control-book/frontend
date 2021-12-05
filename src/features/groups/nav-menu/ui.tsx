import { useGroups } from '~entities/group';

import { PAGES_URLS } from '~shared/config/urls';
import { Link, Menu, Skeleton } from '~shared/ui';

import * as S from './styles';

export const NavMenu = (): JSX.Element => {
  const { data: groups, error } = useGroups();

  const renderNavContent = () => {
    if (error) {
      return <p>Error</p>;
    }

    if (!groups) {
      return <Skeleton.SidebarMenu count={5} />;
    }

    return (
      <Menu className={S.menuList}>
        {groups.map((g) => (
          <Menu.Item key={g.id}>
            <Link href={`${PAGES_URLS.ATMOSPHERE.GROUPS}/${g.slug}`}>
              <a>{g.title}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  return <S.Menu>{renderNavContent()}</S.Menu>;
};
