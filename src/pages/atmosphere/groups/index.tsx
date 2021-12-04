import { GetServerSideProps } from 'next';

import { getGroups } from '~shared/api/groups';
import { getAtmosphereWithSidebarLayout } from '~shared/layouts/atmosphere-with-sidebar-layout';

export const getServerSideProps: GetServerSideProps = async () => {
  const groups = await getGroups();
  const { slug } = groups[0];

  return {
    redirect: {
      destination: `/atmosphere/groups/${slug}`,
      permanent: false,
    },
  };
};

const GroupPage = () => undefined;

GroupPage.getLayout = getAtmosphereWithSidebarLayout;

// eslint-disable-next-line import/no-default-export
export default GroupPage;
