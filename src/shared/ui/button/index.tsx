import { Link } from '~shared/ui/link';

import { ButtonProps } from './props';
import * as S from './styles';

export const Button = ({
  accessoryEnd,
  accessoryStart,
  variant = 'text',
  href,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const renderContent = (
    <>
      {accessoryStart && (
        <S.Accessory position="start" onlyIcon={!children}>
          {accessoryStart}
        </S.Accessory>
      )}

      {children && <S.Text>{children}</S.Text>}

      {accessoryEnd && (
        <S.Accessory position="end" onlyIcon={!children}>
          {accessoryEnd}
        </S.Accessory>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <S.Container
          as="a"
          variant={variant}
          accessoryStart={accessoryStart}
          accessoryEnd={accessoryEnd}
          onlyIcon={!children}
          {...props}
        >
          {renderContent}
        </S.Container>
      </Link>
    );
  }

  return (
    <S.Container
      type="button"
      variant={variant}
      accessoryStart={accessoryStart}
      accessoryEnd={accessoryEnd}
      onlyIcon={!children}
      {...props}
    >
      {renderContent}
    </S.Container>
  );
};
