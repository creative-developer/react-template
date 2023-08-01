import { Routes, Route, Navigate, NavigateProps } from 'react-router-dom';

import { RouteHelper } from '../helpers/RouteHelper';
import { IRoutes, IRoute } from '../interfaces/RouteInterfaces';
import { RoleKeys } from '../types/RouteTypes';
import { PageTitle } from './PageTitle';

interface IRoutesProps {
  routes: IRoutes;
  role?: RoleKeys;
  nestedRoutesProps?: {
    parentPath: string;
  };
  disableRedirect?: boolean;
  redirectProps?: { to: NavigateProps['to'] };
}

export const AppRoutes: React.FC<IRoutesProps> = ({
  routes,
  role,
  nestedRoutesProps,
  disableRedirect,
  redirectProps,
}) => {
  const routesList = RouteHelper.getRoutesWithCheckedRoles(routes, role);

  const renderRouteChildren = (route: IRoute) => {
    const { title, element } = route;

    if (element) {
      return (
        <>
          <PageTitle pageTitle={title} />
          {element}
        </>
      );
    }

    return <></>;
  };

  return (
    <>
      <Routes>
        {routesList.map(route => {
          const { hasNestedRoutes, path, ...rest } = route;
          const routePath = RouteHelper.getParentAndNestedValidRoutePath(
            path,
            hasNestedRoutes,
            nestedRoutesProps?.parentPath,
          );

          return <Route key={routePath} path={routePath} element={renderRouteChildren(route)} {...rest} />;
        })}

        {!disableRedirect ? (
          <Route
            path="*"
            element={<Navigate replace to={redirectProps ? redirectProps.to : routes.NotFoundScreen.path} />}
          />
        ) : (
          <Route path="*" element={<Navigate replace to={routes.NotFoundScreen.path} />} />
        )}
      </Routes>
    </>
  );
};
