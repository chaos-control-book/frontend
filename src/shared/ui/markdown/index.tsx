import { cx } from '@emotion/css';
import ReactMarkdown, {
  Components,
  Options as ReactMarkdownOptions,
} from 'react-markdown';

import classes from '~shared/styles/vendor/wisywig.module.scss';
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
    className={cx(classes.wysiwyg, className)}
    components={{ ...defaultComponents, ...components }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </ReactMarkdown>
);
