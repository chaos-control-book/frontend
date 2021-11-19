import NextImage, {
  ImageLoader as NextImageLoader,
  ImageProps as NextImageProps,
} from 'next/image';

const strapiLoader: NextImageLoader = ({ src, width, quality }) =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}?w=${width}&q=${quality}`;

interface Props extends NextImageProps {}

export const Image = ({
  loader,
  quality,
  layout,
  width,
  height,
  objectFit,
  ...props
}: Props): JSX.Element => (
  <NextImage
    loader={loader ?? strapiLoader}
    quality={quality ?? 75}
    layout={layout ?? 'responsive'}
    width={width ?? 16}
    height={height ?? 9}
    objectFit={objectFit ?? 'cover'}
    priority
    {...props} // eslint-disable-line react/jsx-props-no-spreading
  />
);
