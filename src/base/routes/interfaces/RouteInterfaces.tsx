import { LayoutRouteProps } from 'react-router-dom';

// Roles
export interface IRole {
  role: string;
  label: string;
}

// Routes
export interface IRoute extends LayoutRouteProps {
  path: string;
  title: string;
  credentials?: IRole[];
  hasNestedRoutes?: boolean;
  props?: any;
}

export interface IRoutes {
  [key: string]: IRoute;
}

// Params types
export interface RouteParams {
  [key: string]: string | number | null;
}
