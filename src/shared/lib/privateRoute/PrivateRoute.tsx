import { FC } from "react";
import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "./PrivateRouteProps";
import { RoutePath } from "app/providers/router/config/routeConfig";

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
}) => {
  return isAuthenticated ? children : <Navigate to={RoutePath.main} />;
};
