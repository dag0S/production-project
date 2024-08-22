import { SidebarItemType } from "../../model/items";

export interface SidebarItemProps {
  className?: string;
  item?: SidebarItemType;
  collapsed: boolean;
}
