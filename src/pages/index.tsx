import Head from 'next/head';

import { motion } from 'framer-motion';

import { getLayout } from '~layouts/main-layout';

import { PAGES_URLS } from '~shared/config/urls';
import * as S from '~shared/styles/HomePage.styles';
import { Link } from '~shared/ui';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const HomePage = () => (
  <>
    <Head>
      <title>Контроль Хаоса</title>
    </Head>

    <motion.div
      className={S.container}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <Link href={PAGES_URLS.READ} activeClassName="">
        <S.LeftArea backgroundColor="rgba(177, 177, 177, 0.2)">
          <span>Читать книгу</span>
        </S.LeftArea>
      </Link>

      <S.Separator>или</S.Separator>

      <Link href={PAGES_URLS.ATMOSPHERE.HOME} activeClassName="">
        <S.RightArea backgroundColor="rgba(196, 196, 196, 0.2)">
          <span>Атмосфера</span>
        </S.RightArea>
      </Link>
    </motion.div>
  </>
);

HomePage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default HomePage;
