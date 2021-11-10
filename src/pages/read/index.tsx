import { GetStaticProps } from 'next';

import { getChapters } from '~shared/api/chapter';

export const getStaticProps: GetStaticProps = async () => {
  const chapters = await getChapters();
  const { slug } = chapters[0];

  return {
    redirect: {
      destination: `/read/${slug}`,
      permanent: false,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default function ReadPage() {
  return <></>;
}
