export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  source: Source;
}

export interface Source {
  name: string;
  url: string;
}
