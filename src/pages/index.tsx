import Head from 'next/head';

import cx from 'classnames';
import { motion } from 'framer-motion';

import { getMainLayout } from '~shared/layouts/main-layout';
import classes from '~shared/styles/Home.module.scss';
import { Link } from '~shared/ui';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

// eslint-disable-next-line import/no-default-export
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        className={classes.container}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      >
        <Link href="/read" activeClassName="">
          <a
            className={cx([classes.area, classes.left])}
            style={{
              backgroundColor: 'rgba(177, 177, 177, 0.2)',
            }}
          >
            <span>Читать книгу</span>
          </a>
        </Link>

        <span className={classes.separator}>или</span>

        <Link href="/atmosphere" activeClassName="">
          <a
            className={cx([classes.area, classes.right])}
            style={{
              backgroundColor: 'rgba(196, 196, 196, 0.2)',
            }}
          >
            <span>Атмосфера</span>
          </a>
        </Link>
      </motion.div>
    </>
  );
}

HomePage.getLayout = getMainLayout;
