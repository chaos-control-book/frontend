import { Button } from '~shared/ui';
import { BookmarkIcon } from '~shared/ui/icons';

import * as S from './styles';

// type Urls = Record<'link1' | 'link2', string>;

// interface Props {
//   urls: Urls;
// }

export const Share = (): JSX.Element => (
  <S.Container>
    <p>Поделиться главой</p>

    <S.Actions>
      <Button accessoryStart={<BookmarkIcon />} />

      <Button accessoryStart={<BookmarkIcon filled />} />
    </S.Actions>
  </S.Container>
);
