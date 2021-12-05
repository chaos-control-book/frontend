import ContentLoader from 'react-content-loader';

interface Props {
  itemHeight?: number;
  gap?: number;
  count?: number;
}

export const SidebarMenu = ({
  itemHeight = 28,
  gap = 40,
  count = 3,
}: Props) => (
  <ContentLoader
    speed={2}
    width={240}
    height={itemHeight * count + gap * (count - 1)}
    viewBox={`0 0 240 ${itemHeight * count + gap * (count - 1)}`}
    backgroundColor="#ffffff"
    foregroundColor="#ffffff"
    backgroundOpacity={0.05}
    foregroundOpacity={0.075}
    uniqueKey="skeleton-menu"
  >
    {new Array(count).fill(null).map((_, index) => (
      <rect
        key={`skeleton-menu-item-${index}`} // eslint-disable-line react/no-array-index-key
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
