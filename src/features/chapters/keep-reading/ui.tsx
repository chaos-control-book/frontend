import { PAGES_URLS } from '~shared/config/urls';
import { Button } from '~shared/ui';

import { useKeepReading } from './model';

export const KeepReading = () => {
  const { storedChapterSlug } = useKeepReading();

  if (!storedChapterSlug) {
    return null;
  }

  return (
    <Button href={`${PAGES_URLS.READ}/${storedChapterSlug}`}>
      Продолжить читать
    </Button>
  );
};
