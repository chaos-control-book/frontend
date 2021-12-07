import { Button } from '~shared/ui';
import { LinkIcon, VkIcon } from '~shared/ui/icons';

import * as S from './styles';

export const Share = (): JSX.Element => (
  <S.Container>
    <S.Text>Поделиться главой</S.Text>

    <S.Actions>
      <Button accessoryStart={<LinkIcon />} />

      <Button accessoryStart={<VkIcon />} />
    </S.Actions>
  </S.Container>
);
