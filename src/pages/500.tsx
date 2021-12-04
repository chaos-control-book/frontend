// eslint-disable-next-line import/no-default-export
export default function Custom500Page() {
  return (
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
  );
}
