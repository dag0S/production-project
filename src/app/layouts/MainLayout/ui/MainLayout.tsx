import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";

const MainLayout: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <Outlet />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default MainLayout;
