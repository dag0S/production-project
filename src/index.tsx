import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./app/App";
import { MainPageAsync } from "./pages/MainPage/ui/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/ui/AboutPage.async";
import { Suspense } from "react";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h3>Загрузка...</h3>}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h3>Загрузка...</h3>}>
            <AboutPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
