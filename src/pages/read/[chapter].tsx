import { useEffect } from 'react';

import { GetServerSideProps } from 'next';

import { getLayout } from '~layouts/reader-layout';

import {
  ShareChapter,
  useChapterKeepReadingIndentTop,
  useChapterKeepReadingLastSlug,
} from '~features/chapters';

import { getChapters } from '~entities/chapter';
import type { Chapter } from '~entities/chapter';

import { PAGES_URLS } from '~shared/config/urls';
import { useWindowScroll } from '~shared/hooks';
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

  useChapterKeepReadingLastSlug();
  const { getIndentTop } = useChapterKeepReadingIndentTop();

  useEffect(() => {
    window.scrollTo({
      top: getIndentTop(),
    });
  }, []);

  return (
    <S.Container>
      <S.Header $isMini={scrollPercentY > 20}>
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
          <ShareChapter />

          {nextChapterSlug && (
            <Button
              href={`${PAGES_URLS.READ}/${nextChapterSlug}`}
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

ReadChapterPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default ReadChapterPage;
