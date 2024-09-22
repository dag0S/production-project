import { FC, SVGAttributes } from "react";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FC<SVGAttributes<SVGElement>>;
  isAuthenticated?: boolean;
}