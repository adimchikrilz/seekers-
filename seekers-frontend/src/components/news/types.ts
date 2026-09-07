export interface NewsBlock {
  type: "paragraph" | "heading" | "subheading" | "quote" | "list";
  text?: string;
  items?: string[];
  attribution?: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  blocks: NewsBlock[];
  cta?: { label: string; href: string };
}
