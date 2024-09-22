import { SidebarItemType } from "../../model/types/sidebar";

export interface SidebarItemProps {
  className?: string;
  item: SidebarItemType;
  collapsed: boolean;
}
