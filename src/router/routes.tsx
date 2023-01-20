import React, { lazy } from 'react';

const LoginPage = lazy(async () => import('@src/pages/Login'));


type Route = {
  path: string;
  exact?: boolean;
  element: React.ReactElement;
}

enum PublicRouteNames {
  LOGIN = '/login',
}

enum PrivateRouteNames {
  MANAGERS = '/managers',
  CUSTOMERS = '/customers',
}

const publicRoutes: Route[] = [
  { path: PublicRouteNames.LOGIN, element: <LoginPage />, exact: true },
];

const privateRoutes: Route[] = [];

export { privateRoutes, publicRoutes, PublicRouteNames, PrivateRouteNames };
