import { GetServerSideProps } from 'next';

import { getLayout } from '~layouts/atmosphere-with-sidebar-layout';

import { getGroupBySlug } from '~entities/group';
import type { Group } from '~entities/group';

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

const GroupPage = ({ group }: Props) => (
  <S.Container>
    <S.Head>
      <h1>{group.title}</h1>

      <S.Subtitle>{group.subtitle}</S.Subtitle>
    </S.Head>

    {group.coverImage && <Image src={group.coverImage.url} height={3} />}

    <Markdown className={S.description}>{group.description}</Markdown>
  </S.Container>
);

GroupPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default GroupPage;
