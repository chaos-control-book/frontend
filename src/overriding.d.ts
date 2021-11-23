/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    STRAPI_PREVIEW_SECRET: string;
    NEXT_PUBLIC_STRAPI_CLIENT_API_URL: string;
    NEXT_PUBLIC_STRAPI_SERVER_API_URL: string;
    NEXT_PUBLIC_STRAPI_TOKEN: string;
  }
}
