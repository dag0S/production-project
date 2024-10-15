import { IUser } from "entities/user";

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "created",
}

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
  "All" = "All",
  "IT" = "IT",
  "CSS" = "CSS",
  "JavaScript" = "JavaScript",
  "Python" = "Python",
  "TypeScript" = "TypeScript",
  "React" = "React",
  "Frontend" = "Frontend",
  "Redux" = "Redux",
  "C++" = "C++",
  "Backend" = "Backend",
  "Unity" = "Unity",
  "Gamedev" = "Gamedev",
  "Linux" = "Linux",
  "OS" = "OS",
  "NodeJS" = "NodeJS",
  "PHP" = "PHP",
  "SQL" = "SQL",
  "DataBase" = "DataBase",
}

export interface IArticle {
  id: number;
  title: string;
  user: IUser;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export enum ArticleView {
  BIG = "BIG",
  SMALL = "SMALL",
}
