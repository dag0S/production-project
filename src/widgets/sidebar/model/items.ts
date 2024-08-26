import { RoutePath } from "app/providers/router/config/routeConfig";
import { FC, SVGAttributes } from "react";
import MainIcon from "shared/assets/icons/main.svg";
import AboutUsIcon from "shared/assets/icons/about-us.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FC<SVGAttributes<SVGElement>>;
  isAuthenticated?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  { path: RoutePath.main, Icon: MainIcon, text: "Главная" },
  { path: RoutePath.about, Icon: AboutUsIcon, text: "О сайте" },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Профиль",
    isAuthenticated: true,
  },
];
