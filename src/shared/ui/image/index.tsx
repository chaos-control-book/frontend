import NextImage, {
  ImageLoader as NextImageLoader,
  ImageProps as NextImageProps,
} from 'next/image';

const strapiLoader: NextImageLoader = ({ src, width, quality }) =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}?w=${width}&q=${quality}`;

interface Props extends NextImageProps {}

export const Image = (props: Props): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NextImage loader={strapiLoader} quality={75} {...props} />
);
