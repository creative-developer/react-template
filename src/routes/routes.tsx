import { RoutesType } from '~/base/routes/types/RouteTypes';
import { LoginScreen } from '~/screens/auth/LoginScreen';
import { MainScreen } from '~/screens/main/MainScreen';
import { NotFoundScreen } from '~/screens/not-found/NotFoundScreen';

const screens = { MainScreen, NotFoundScreen };
const authScreens = { LoginScreen, NotFoundScreen };

type RoutesKeys = keyof typeof screens;
export const routes: RoutesType<RoutesKeys> = {
  MainScreen: {
    path: '/',
    title: 'Главная',
    element: <MainScreen />,
    // credentials: [roles.director],
  },
  NotFoundScreen: {
    path: '*',
    title: '404 Страница не найдена',
    element: <NotFoundScreen />,
  },
};

// Auth Routes
type AuthRouteKeys = keyof typeof authScreens;
export const authRoutes: RoutesType<AuthRouteKeys> = {
  LoginScreen: {
    path: '/',
    title: 'Вход',
    element: <LoginScreen />,
  },

  NotFoundScreen: {
    path: '*',
    title: '404 Страница не найдена',
    element: <NotFoundScreen />,
  },
};
