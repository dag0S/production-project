export enum ArticleBlockType {
  CODE = "CODE",
  TEXT = "TEXT",
  IMAGE = "IMAGE",
}

export interface ArticleBlockBase {
  id: number;
  type: ArticleBlockType;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleCodeBlock
  | ArticleImageBlock;

export enum ArticleType {
  "IT" = "IT",
  "SCIENCE" = "SCIENCE",
  "ECONOMICS" = "ECONOMICS",
}

export interface IArticle {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
