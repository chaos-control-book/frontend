export const request = async <T>(
  url: RequestInfo,
  params?: RequestInit
): Promise<T> => {
  const defaultHeaders = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    'Content-Type': 'application/json',
  };

  /**
   * Если фронтенд запускается в Docker или другом контейнере
   *  с поддержкой внутренних сетей, то на сервере Next.js
   *  нужно стучаться к внутренней сети контейнера,
   *  а на клиенте Next.js нужно стучаться к внешнему URL,
   *  который определён в Nginx
   */
  const normalizedUrl =
    typeof window !== 'undefined'
      ? process.env.NEXT_PUBLIC_STRAPI_CLIENT_API_URL
      : process.env.NEXT_PUBLIC_STRAPI_SERVER_API_URL;

  return fetch(`${normalizedUrl}${url}`, {
    ...params,
    headers: { ...defaultHeaders, ...params?.headers },
  }).then((r) => {
    if (!r.ok) {
      throw new Error(r.statusText);
    }

    return r.json() as Promise<T>;
  });
};
