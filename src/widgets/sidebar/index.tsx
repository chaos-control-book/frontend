import { CSSProperties, ReactElement } from 'react';

import { Button } from '~shared/ui';
import { ChevronIcon } from '~shared/ui/icons';

import * as S from './styles';

interface Props {
  renderMenu: ReactElement;
  showBackButton?: boolean;
  className?: string;
  wrapperClassName?: string;
  style?: CSSProperties;
}

export const Sidebar = ({
  renderMenu,
  showBackButton,
  wrapperClassName,
  ...props
}: Props): JSX.Element => (
  <S.Container {...props}>
    <S.Wrapper className={wrapperClassName}>
      {showBackButton && (
        <Button
          href="/"
          accessoryStart={<ChevronIcon left />}
          className={S.backButton}
        >
          Вернуться на сайт
        </Button>
      )}

      {renderMenu}
    </S.Wrapper>
  </S.Container>
);
