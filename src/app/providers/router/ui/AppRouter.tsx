import { FC, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "app/App";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RoutePath } from "../config/routeConfig";

const router = createBrowserRouter([
  {
    path: RoutePath.main,
    element: (
      <Suspense fallback={<h3>Загрузка...</h3>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: RoutePath.main,
        element: <MainPage />,
      },
      {
        path: RoutePath.about,
        element: <AboutPage />,
      },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
