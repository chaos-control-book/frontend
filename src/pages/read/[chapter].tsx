import { GetServerSideProps } from 'next';

import cx from 'classnames';
import ReactMarkdown, { Components } from 'react-markdown';

import { useKeepReading } from '~features/keep-reading';

import { getChapters } from '~shared/api/chapter';
import { Chapter } from '~shared/api/types';
import { useWindowScroll } from '~shared/hooks';
import { getReaderLayout } from '~shared/layouts/reader-layout';
import { intToRoman } from '~shared/lib/convert';
import classes from '~shared/styles/Read.module.scss';
import { Button, Image } from '~shared/ui';
import {
  BookmarkIcon,
  ChevronRightIcon,
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

const components: Components = {
  p: (paragraph) => {
    const {
      node: {
        children: [firstChild],
      },
    } = paragraph;
    if ('tagName' in firstChild && firstChild.tagName === 'img') {
      const imageProps:
        | {
            src?: string;
            alt?: string;
          }
        | undefined = firstChild.properties;
      return (
        <p className="image">
          <Image src={imageProps?.src ?? ''} alt={imageProps?.alt} />
        </p>
      );
    }

    return <p>{paragraph.children}</p>;
  },
};

// eslint-disable-next-line import/no-default-export
export default function ReadChapterPage({
  nextChapterSlug,
  currentChapter,
}: Props) {
  const { scrollPercentY } = useWindowScroll();

  useKeepReading();

  return (
    <section className={classes.reader}>
      <div
        className={cx(classes.head, {
          [classes.head_mini]: scrollPercentY > 20,
        })}
      >
        <div className={classes.head__actions}>
          <Button accessoryStart={<BookmarkIcon />} />
          <Button accessoryStart={<DayIcon />} />
        </div>

        {currentChapter?.title && (
          <p className={classes.head__breadcrumbs}>
            {currentChapter?.number && (
              <span className={classes.accent}>
                Глава {intToRoman(currentChapter?.number)}{' '}
              </span>
            )}
            {currentChapter.title}
          </p>
        )}
      </div>

      {currentChapter?.coverImage && (
        <Image
          className={classes.head__img}
          src={currentChapter.coverImage.formats.large.url}
          alt={currentChapter.coverImage.alternativeText ?? ''}
        />
      )}

      <div className={classes.body}>
        {currentChapter?.placeOfAction && (
          <p className={classes.location}>
            <span className={classes.locationIcons}>
              <TimeIcon />
              <LocationIcon />
            </span>
            <span className={classes.locationText}>
              {currentChapter.placeOfAction}
            </span>
          </p>
        )}

        {currentChapter?.content && (
          <ReactMarkdown className="wysiwyg" components={components}>
            {currentChapter.content}
          </ReactMarkdown>
        )}
      </div>

      <div className={classes.footer}>
        <div className={classes.footer__inner}>
          <div className={classes.footer__left}>
            <p>Поделиться главой</p>
            <div className={classes.footer__share}>
              <Button accessoryStart={<BookmarkIcon />} />

              <Button accessoryStart={<BookmarkIcon />} />
            </div>
          </div>

          {nextChapterSlug && (
            <div className={classes.footer__right}>
              <Button
                as="link"
                href={`/read/${nextChapterSlug}`}
                variant="filled"
                accessoryEnd={<ChevronRightIcon />}
              >
                Следующая глава
              </Button>
            </div>
          )}
        </div>

        <div className={classes.footer__copyright}>
          <p>Автор книги: Валентин Кротов</p>
        </div>
      </div>
    </section>
  );
}

ReadChapterPage.getLayout = getReaderLayout;
