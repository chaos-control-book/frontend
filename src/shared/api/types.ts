type ActionDate = Maybe<string>;

interface CoverImage {
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
}

export interface Chapter {
  id: number;
  title: string;
  number: number;
  content: string;
  book?: Maybe<Book>;
  slug: string;
  placeOfAction?: Maybe<string>;
  coverImage?: Maybe<CoverImage>;
  created_by?: ActionDate;
  updated_by?: ActionDate;
  published_at?: ActionDate;
}

export interface Book {
  id: number;
  title: string;
  description?: Maybe<string>;
  volume: number;
  coverImage?: Maybe<CoverImage>;
  chapters?: Maybe<Chapter[]>;
  slug: string;
  created_by?: ActionDate;
  updated_by?: ActionDate;
  published_at?: ActionDate;
}

export interface Group {
  id: number;
  title: string;
  subtitle?: Maybe<string>;
  coverImage?: Maybe<CoverImage>;
  description: string;
  slug: string;
  created_by?: ActionDate;
  updated_by?: ActionDate;
  published_at?: ActionDate;
}
