import { createSelector } from "@reduxjs/toolkit";
import { RoutePath } from "app/providers/router/config/routeConfig";
import { getUserAuthData } from "entities/user";
import { SidebarItemType } from "../types/sidebar";
import MainIcon from "shared/assets/icons/main.svg";
import AboutUsIcon from "shared/assets/icons/about-us.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { path: RoutePath.main, Icon: MainIcon, text: "Главная" },
    { path: RoutePath.about, Icon: AboutUsIcon, text: "О сайте" },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData?.id,
        Icon: ProfileIcon,
        text: "Профиль",
        isAuthenticated: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: "Статьи",
        isAuthenticated: true,
      }
    );
  }

  return sidebarItemsList;
});
