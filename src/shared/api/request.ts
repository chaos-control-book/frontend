export const request = async (
  url: string,
  params?: {
    headers?: Record<string, string>;
  }
) => {
  const defaultHeaders = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    'Content-Type': 'application/json',
  };

  const normalizedUrl =
    typeof window !== 'undefined'
      ? process.env.NEXT_PUBLIC_STRAPI_CLIENT_API_URL
      : process.env.NEXT_PUBLIC_STRAPI_SERVER_API_URL;

  return fetch(`${normalizedUrl}${url}`, {
    ...params,
    headers: { ...defaultHeaders, ...params?.headers },
  }).then((r) => r.json());
};
