export type ActionDate = Maybe<string>;

export type CoverImage = {
  id: string;
  name: string;
  alternativeText?: Maybe<string>;
  caption?: Maybe<string>;
  width: number;
  height: number;
  formats: Record<
    'large' | 'medium' | 'small' | 'thumbnail',
    {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path: Maybe<string>;
      size: number;
      url: string;
      width: number;
    }
  >;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: Maybe<string>;
  provider: string;
  provider_metadata?: Maybe<Record<string, string>>;
  related?: Maybe<string>;
  created_by: string;
  updated_by: string;
};
