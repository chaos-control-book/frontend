import { CSSProperties } from 'react';

import { Button } from '~shared/ui';
import { DiscordIcon, VkIcon } from '~shared/ui/icons';

import * as S from './styles';

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const Footer = (props: Props): JSX.Element => (
  <S.Container {...props}>
    <S.LinksList>
      <S.LinksListItem>
        <Button
          href="https://vk.com/"
          target="_blank"
          accessoryStart={<VkIcon />}
        />
      </S.LinksListItem>

      <S.LinksListItem>
        <Button
          href="https://discord.com/"
          target="_blank"
          accessoryStart={<DiscordIcon />}
        />
      </S.LinksListItem>
    </S.LinksList>
  </S.Container>
);
