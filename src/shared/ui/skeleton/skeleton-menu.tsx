import ContentLoader from 'react-content-loader';

interface Props {
  itemHeight?: number;
  gap?: number;
  itemsCount?: number;
}

export const SkeletonMenu = ({
  itemHeight = 28,
  gap = 40,
  itemsCount = 3,
}: Props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={itemHeight * itemsCount + gap * (itemsCount - 1)}
    viewBox={`0 0 240 ${itemHeight * itemsCount + gap * (itemsCount - 1)}`}
    backgroundColor="#ffffff"
    foregroundColor="#ffffff"
    backgroundOpacity={0.05}
    foregroundOpacity={0.075}
    uniqueKey="skeleton"
  >
    {new Array(itemsCount).fill(null).map((_, index) => (
      <rect
        key={`skeleton-item-${index}`} // eslint-disable-line react/no-array-index-key
        x="0"
        y={itemHeight * index + gap * index}
        rx="4"
        ry="4"
        width="240"
        height={itemHeight}
      />
    ))}
  </ContentLoader>
);
