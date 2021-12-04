import Head from 'next/head';

const Custom404Page = () => (
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
      <h1>Ну что, начитался?</h1>
      <h3>Такой страницы нет.</h3>
    </div>
  </>
);

// eslint-disable-next-line import/no-default-export
export default Custom404Page;
