import { FC, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Layout } from '@src/components';

import { privateRoutes, publicRoutes, PrivateRouteNames, PublicRouteNames } from './routes';
import { useAuth } from '@providers/AuthProvider/AuthContext';

const AppRouter: FC = () => {
  const { isAuth } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth && !Object.values(PrivateRouteNames).includes(pathname as PrivateRouteNames)) {
      navigate(PrivateRouteNames.CUSTOMERS);
    } else if (!isAuth && pathname !== PublicRouteNames.LOGIN) {
      navigate(PublicRouteNames.LOGIN)
    }
  }, [isAuth, pathname]);

  return isAuth ? (
    <Layout>
      <Routes>
        {privateRoutes.map(route => (
          <Route
            key={route.path}
            {...route}
          />
        ))}
      </Routes>
    </Layout>
  ) : (
    <Routes>
      {publicRoutes.map(route => (
        <Route
          key={route.path}
          {...route}
        />
      ))}
    </Routes>
  );
};

export { AppRouter };
