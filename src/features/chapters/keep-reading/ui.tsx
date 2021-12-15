import { PAGES_URLS } from '~shared/config/urls';
import { Button } from '~shared/ui';

import { useLastSlug } from './model/useLastSlug';

export const KeepReading = () => {
  const { chapterSlug } = useLastSlug();

  if (!chapterSlug) {
    return null;
  }

  return (
    <Button href={`${PAGES_URLS.READ}/${chapterSlug}`}>
      Продолжить читать
    </Button>
  );
};
