import { GetServerSideProps } from 'next';

import { getGroups } from '~entities/group';

import { PAGES_URLS } from '~shared/config/urls';

export const getServerSideProps: GetServerSideProps = async () => {
  const groups = await getGroups();
  const { slug } = groups[0];

  return {
    redirect: {
      destination: `${PAGES_URLS.ATMOSPHERE.GROUPS}/${slug}`,
      permanent: false,
    },
  };
};

const GroupPage = () => undefined;

// eslint-disable-next-line import/no-default-export
export default GroupPage;
