import { Button } from '~shared/ui';

import { useKeepReading } from './model';

export const KeepReadingButton = () => {
  const { storedChapterSlug } = useKeepReading();

  if (!storedChapterSlug) {
    return null;
  }

  return <Button href={`read/${storedChapterSlug}`}>Продолжить читать</Button>;
};
