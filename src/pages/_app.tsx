import '~shared/styles/base/variables.scss';

import { ReactElement, ReactNode, useEffect } from 'react';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Global } from '@emotion/react';
import { AnimatePresence } from 'framer-motion';
import NProgress from 'nprogress';

import { globalStyles } from '~shared/styles';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

NProgress.configure({ showSpinner: false });

const CustomApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (): void => {
      NProgress.start();
    };

    const handleComplete = (): void => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Global styles={globalStyles} />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {getLayout(<Component {...pageProps} />)}
      </AnimatePresence>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default CustomApp;
