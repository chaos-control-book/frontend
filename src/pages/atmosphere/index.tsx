import { motion } from 'framer-motion';

import { getAtmosphereLayout } from '~shared/layouts/atmosphere-layout';
import classes from '~shared/styles/AtmospherePage.module.scss';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

// eslint-disable-next-line import/no-default-export
export default function AtmospherePage() {
  return (
    <motion.div
      className={classes.container}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      <div className={classes.hello}>
        <h2 className={classes.hello__title}>
          Это гайд по вселенной «Контроль Хаоса»
        </h2>

        <p className={classes.hello__text}>
          Здесь вы найдете всю информацию по книге
        </p>
      </div>
    </motion.div>
  );
}

AtmospherePage.getLayout = getAtmosphereLayout;
