type Maybe<T> = T | null;

type Route = {
  href: string;
  label: string;
  exact?: boolean;
};
