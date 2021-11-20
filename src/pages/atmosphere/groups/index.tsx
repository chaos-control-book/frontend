import { CSSProperties, ReactNode } from 'react';

import { GetServerSideProps } from 'next';

import { getGroups } from '~shared/api/groups';
import { getAtmosphereWithSidebarLayout } from '~shared/layouts/atmosphere-with-sidebar-layout';

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

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

// eslint-disable-next-line import/no-default-export
export default function GroupPage({
  className,
  style,
  children,
}: Props): JSX.Element {
  return (
    <div className={className} style={style}>
      <div>{children}</div>
    </div>
  );
}

GroupPage.getLayout = getAtmosphereWithSidebarLayout;
