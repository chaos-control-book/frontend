import { GetServerSideProps } from 'next';

import { getChapters } from '~shared/api/chapter';

export const getServerSideProps: GetServerSideProps = async () => {
  const chapters = await getChapters();
  const { slug } = chapters[0];

  return {
    redirect: {
      destination: `/read/${slug}`,
      permanent: false,
    },
  };
};

const ReadPage = () => undefined;

// eslint-disable-next-line import/no-default-export
export default ReadPage;
