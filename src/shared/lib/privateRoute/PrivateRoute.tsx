import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PrivateRouteProps } from "./PrivateRouteProps";
import { RoutePath } from "app/providers/router/config/routeConfig";
import { getUserAuthData } from "entities/user";

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children
}) => {
  const isAuth = useSelector(getUserAuthData);

  return isAuth ? children : <Navigate to={RoutePath.main} />;
};
