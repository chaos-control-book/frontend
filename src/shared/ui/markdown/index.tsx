import cx from 'classnames';
import ReactMarkdown, {
  Components,
  Options as ReactMarkdownOptions,
} from 'react-markdown';

import { Image } from '~shared/ui/image';

interface Props extends ReactMarkdownOptions {}

const defaultComponents: Components = {
  p: (paragraph) => {
    const {
      node: {
        children: [firstChild],
      },
    } = paragraph;
    if ('tagName' in firstChild && firstChild.tagName === 'img') {
      const imageProps:
        | {
            src?: string;
            alt?: string;
          }
        | undefined = firstChild.properties;
      return (
        <p className="image">
          <Image src={imageProps?.src ?? ''} alt={imageProps?.alt} />
        </p>
      );
    }

    return <p>{paragraph.children}</p>;
  },
};

export const Markdown = ({
  className,
  components,
  children,
  ...props
}: Props) => (
  <ReactMarkdown
    className={cx('wysiwyg', className)}
    components={{ ...defaultComponents, ...components }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </ReactMarkdown>
);
