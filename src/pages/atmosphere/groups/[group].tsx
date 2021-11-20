import { GetServerSideProps } from 'next';

import { getGroupBySlug } from '~shared/api/groups';
import { Group } from '~shared/api/types';
import { getAtmosphereWithSidebarLayout } from '~shared/layouts/atmosphere-with-sidebar-layout';
import classes from '~shared/styles/GroupPage.module.scss';
import { Image, Markdown } from '~shared/ui';

interface Props {
  group: Group;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { group: groupSlug } = ctx.params ?? {};
  const group = await getGroupBySlug(groupSlug as string | undefined);

  if (!group) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      group,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default function GroupPage({ group }: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h1 className={classes.title}>{group.title}</h1>

        <p className={classes.subtitle}>{group.subtitle}</p>
      </div>

      {group.coverImage && <Image src={group.coverImage.url} height={3} />}

      <Markdown className={classes.description}>{group.description}</Markdown>
    </div>
  );
}

GroupPage.getLayout = getAtmosphereWithSidebarLayout;
