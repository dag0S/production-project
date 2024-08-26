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
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/user";
import { PrivateRoute } from "shared/lib/privateRoute/PrivateRoute";

export const AppRouter: FC = () => {
  const isAuth = useSelector(getUserAuthData);

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
              <PrivateRoute isAuthenticated={!!isAuth}>
                <ProfilePage />
              </PrivateRoute>
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

  return <RouterProvider router={router} />;
};
