import { GetServerSideProps } from 'next';

import { useKeepReading } from '~features/keep-reading';

import { getChapters } from '~shared/api/chapter';
import { Chapter } from '~shared/api/types';
import { useWindowScroll } from '~shared/hooks';
import { getReaderLayout } from '~shared/layouts/reader-layout';
import { intToRoman } from '~shared/lib/convert';
import * as S from '~shared/styles/ReadPage.styles';
import { Button, Image, Markdown } from '~shared/ui';
import {
  BookmarkIcon,
  ChevronIcon,
  DayIcon,
  LocationIcon,
  TimeIcon,
} from '~shared/ui/icons';

interface Props {
  nextChapterSlug: Maybe<Chapter['slug']>;
  currentChapter: Chapter;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const chapters = await getChapters();
  const { chapter: chapterSlug } = ctx.params ?? {};

  const currentChapter = chapters.find((c) => c.slug === chapterSlug);

  if (!currentChapter || !chapters) {
    return {
      notFound: true,
    };
  }

  const currentChapterIndex = chapters.findIndex(
    (c) => c.slug === currentChapter.slug
  );

  const { slug: nextChapterSlug } = chapters[currentChapterIndex + 1] ?? {};

  return {
    props: {
      currentChapter,
      nextChapterSlug: nextChapterSlug ?? null,
    },
  };
};

const ReadChapterPage = ({ nextChapterSlug, currentChapter }: Props) => {
  const { scrollPercentY } = useWindowScroll();

  useKeepReading();

  return (
    <S.Container>
      <S.Header isMini={scrollPercentY > 20}>
        {currentChapter?.title && (
          <S.HeaderTitle>
            {currentChapter?.number && (
              <S.ChapterNumber>
                Глава {intToRoman(currentChapter?.number)}{' '}
              </S.ChapterNumber>
            )}

            {currentChapter.title}
          </S.HeaderTitle>
        )}

        <S.HeaderActions>
          <Button accessoryStart={<BookmarkIcon />} />
          <Button accessoryStart={<DayIcon />} />
        </S.HeaderActions>
      </S.Header>

      {currentChapter?.coverImage && (
        <Image
          className={S.coverImage}
          src={currentChapter.coverImage.formats.large.url}
          alt={currentChapter.coverImage.alternativeText ?? ''}
        />
      )}

      <S.Body>
        {currentChapter?.placeOfAction && (
          <S.Location>
            <S.LocationIcons>
              <TimeIcon filled />
              <LocationIcon />
            </S.LocationIcons>

            <S.LocationText>{currentChapter.placeOfAction}</S.LocationText>
          </S.Location>
        )}

        {currentChapter?.content && (
          <Markdown>{currentChapter.content}</Markdown>
        )}
      </S.Body>

      <S.Footer>
        <S.FooterInner>
          <S.FooterLeft>
            <p>Поделиться главой</p>
            <S.FooterShare>
              <Button accessoryStart={<BookmarkIcon />} />

              <Button accessoryStart={<BookmarkIcon filled />} />
            </S.FooterShare>
          </S.FooterLeft>

          {nextChapterSlug && (
            <Button
              href={`/read/${nextChapterSlug}`}
              variant="filled"
              accessoryEnd={<ChevronIcon right />}
            >
              Следующая глава
            </Button>
          )}
        </S.FooterInner>

        <S.FooterCopyright>
          <p>Автор книги: Валентин Кротов</p>
        </S.FooterCopyright>
      </S.Footer>
    </S.Container>
  );
};

ReadChapterPage.getLayout = getReaderLayout;

// eslint-disable-next-line import/no-default-export
export default ReadChapterPage;
