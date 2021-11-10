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

  return fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`, {
    ...params,
    headers: { ...defaultHeaders, ...params?.headers },
  }).then((r) => r.json());
};
