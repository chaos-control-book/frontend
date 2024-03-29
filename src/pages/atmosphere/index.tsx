import { motion } from 'framer-motion';

import { getLayout } from '~layouts/atmosphere-layout';

import * as S from '~shared/styles/AtmospherePage.styles';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const AtmospherePage = () => (
  <motion.div
    className={S.container}
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ type: 'linear' }}
  >
    <S.TextContainer>
      <S.Title>Это гайд по вселенной «Контроль Хаоса»</S.Title>

      <S.Text>Здесь вы найдете всю информацию по книге</S.Text>
    </S.TextContainer>
  </motion.div>
);

AtmospherePage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default AtmospherePage;
