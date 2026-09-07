export interface Slide {
  src: string;
  alt: string;
  caption: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Facility {
  index: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  blob?: boolean;
}

export interface NewsItem {
  title: string;
  body: string;
  href: string;
}
