import { GetServerSideProps } from 'next';

import { getChapters } from '~entities/chapter';

import { PAGES_URLS } from '~shared/config/urls';

export const getServerSideProps: GetServerSideProps = async () => {
  const chapters = await getChapters();
  const { slug } = chapters[0];

  return {
    redirect: {
      destination: `${PAGES_URLS.READ}/${slug}`,
      permanent: false,
    },
  };
};

const ReadPage = () => undefined;

// eslint-disable-next-line import/no-default-export
export default ReadPage;
