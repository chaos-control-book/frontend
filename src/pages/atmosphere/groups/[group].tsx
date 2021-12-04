import { GetServerSideProps } from 'next';

import { getGroupBySlug } from '~shared/api/groups';
import { Group } from '~shared/api/types';
import { getAtmosphereWithSidebarLayout } from '~shared/layouts/atmosphere-with-sidebar-layout';
import * as S from '~shared/styles/GroupPage.styles';
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
    <S.Container>
      <S.Head>
        <h1>{group.title}</h1>

        <S.Subtitle>{group.subtitle}</S.Subtitle>
      </S.Head>

      {group.coverImage && <Image src={group.coverImage.url} height={3} />}

      <Markdown className={S.description}>{group.description}</Markdown>
    </S.Container>
  );
}

GroupPage.getLayout = getAtmosphereWithSidebarLayout;
