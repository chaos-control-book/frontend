import Head from 'next/head';

const Custom500Page = () => (
  <>
    <Head>
      <title>404</title>
    </Head>

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <h1>Ошибка сервера 😢</h1>
    </div>
  </>
);

// eslint-disable-next-line import/no-default-export
export default Custom500Page;
