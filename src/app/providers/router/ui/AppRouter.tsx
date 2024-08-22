import { FC, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutePath } from "../config/routeConfig";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { PageLoader } from "widgets/pageLoader/ui/PageLoader";
import { MainLayout } from "app/layouts/MainLayout";
import { PageError } from "widgets/pageError/ui/PageError";
import { ProfilePage } from "pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: RoutePath.main,
    errorElement: <PageError />,
    element: (
      <Suspense fallback={<PageLoader />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: RoutePath.main,
        element: (
          <Suspense fallback={<PageLoader />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: RoutePath.about,
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: RoutePath.profile,
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProfilePage />
          </Suspense>
        ),
      },
      // last
      {
        path: RoutePath.not_found,
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
