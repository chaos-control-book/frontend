import { useChapters } from '~shared/api/chapter';
import { useWindowScroll } from '~shared/hooks';
import { intToRoman } from '~shared/lib/convert';
import { Link, Menu } from '~shared/ui';

import * as S from './styles';

export const ChaptersNavMenu = (): JSX.Element => {
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
      <Menu>
        {chapters.map((c) => (
          <Menu.Item key={c.id}>
            <Link href={`/read/${c.slug}`}>
              <a>
                <S.ChapterNumber>{intToRoman(c.number)}.</S.ChapterNumber>
                {c.title}
              </a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  return <S.Menu $hidden={scrollPercentY > 35}>{renderNavContent()}</S.Menu>;
};
