import { IUser } from "entities/user";

export interface IComment {
  id: number;
  user: IUser;
  text: string;
}