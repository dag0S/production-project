import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { PrivateRouteProps } from "./PrivateRouteProps";
import { RoutePath } from "app/providers/router/config/routeConfig";
import { getUserAuthData } from "entities/user";

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
};
