import { generatePath, To, Path, resolvePath, PathMatch, matchPath } from 'react-router-dom';

import { ROUTE_OPTIONAL_PARAMS_MATCH_REGEX } from '../consts/globalConsts';
import { RouteParams, IRoutes, IRoute } from '../interfaces/RouteInterfaces';
import { RoleKeys } from '../types/RouteTypes';

export class RouteHelper {
  /**
   * Возвращает путь с интерполированными параметрами.
   *
   * @see https://reactrouter.com/utils/generate-path
   *
   * @param path - путь из routes. Например: routes.SomeScreen.path
   * @param params - { param: value, ... }
   * @returns string
   *
   * @example
   *
   * const path = 'some-page/:id';
   * RouteHelper.makePath(path, { id: 1 })};
   * // -> 'some-page/1'
   *
   * const path = 'categories/:categoryId/product/:productId';
   * RouteHelper.makePath(path, { categoryId: 1, productId: 2 })};
   * // -> 'categories/1/product/2'
   *
   */
  static makePath = (path: string, params: RouteParams): string => {
    return generatePath(path, params);
  };

  static resolvePath = (to: To, fromPathname?: string | undefined): Path => {
    return resolvePath(to, fromPathname);
  };

  static getRoutesWithCheckedRoles = (routesData: IRoutes, currentRole?: RoleKeys): IRoute[] => {
    const routes = Object.values(routesData);
    const result: IRoute[] = [];

    for (let i = 0; i < routes.length; i++) {
      if (routes[i]?.credentials && currentRole) {
        const findedRole = routes[i].credentials?.find(({ role }) => role === currentRole);

        if (findedRole?.role === currentRole) {
          result.push(routes[i]);
        }
      } else {
        result.push(routes[i]);
      }
    }

    return result;
  };

  static matchPath = (pattern: string, pathname: string): PathMatch<any> | null => {
    return matchPath(pattern, pathname);
  };

  static matchPathWithOptional = (pattern: string, pathname: string): PathMatch<any> | null => {
    const isOptionalParamPattern = ROUTE_OPTIONAL_PARAMS_MATCH_REGEX.test(pattern);

    if (!isOptionalParamPattern) {
      return RouteHelper.matchPath(pattern, pathname);
    }

    const clearedPathname = RouteHelper.clearUrl(pathname);

    if (pattern.split('/').length !== clearedPathname.split('/').length) {
      return RouteHelper.matchPath(pattern.replace(ROUTE_OPTIONAL_PARAMS_MATCH_REGEX, ''), clearedPathname);
    }

    return RouteHelper.matchPath(pattern.replaceAll('?', ''), clearedPathname);
  };

  static clearUrl = (url: string | null | undefined) => {
    if (!url?.length) {
      return '';
    }

    url = url.trim();

    return url.slice(url.length - 1) === '/' ? url.slice(0, url.length - 1) : url;
  };

  static getParentAndNestedValidRoutePath = (
    currentRoutePath: string,
    hasNestedRoutes: boolean | undefined,
    nestedRoutesParentPath: string | undefined,
  ) => {
    const parentRoutePath = hasNestedRoutes ? currentRoutePath + '/*' : currentRoutePath;

    return nestedRoutesParentPath ? currentRoutePath.replace(nestedRoutesParentPath, '') : parentRoutePath;
  };
}
