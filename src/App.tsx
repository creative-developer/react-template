import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { useRootStore } from './base/hooks/useRootStore';
import { AppRoutes } from './base/routes/components/AppRoutes';
import { BaseLayout } from './components/Layouts/BaseLayout';
import { Loader } from './components/UI/Loader';
import { routes, authRoutes } from './routes/routes';

export const App: React.FC = observer(() => {
  const { authStore } = useRootStore();

  // Effects
  useEffect(() => {
    authStore.checkAuth(() => {
      // userStore.getCurrentUser();
      console.log('get user');
    });
  }, []);

  // Renders
  const renderIsAuthStack = () => {
    return (
      <>
        <BaseLayout>
          <AppRoutes routes={routes} />
        </BaseLayout>

        <ReactNotifications />
      </>
    );
  };

  const renderIsNotAuthStack = () => {
    return (
      <>
        <AppRoutes redirectProps={{ to: authRoutes.LoginScreen.path }} routes={authRoutes} />

        <ReactNotifications />
      </>
    );
  };

  // Main loader
  // TODO: В будущем нужно добавить || usersStore.loading
  if (!authStore.completeCheckAuth) {
    return <Loader minHeight="100vh" />;
  }

  return !authStore.isAuth ? renderIsAuthStack() : renderIsNotAuthStack();
});
