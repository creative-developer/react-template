import { Typography, Box, Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRootStore } from '~/base/hooks/useRootStore';
import { LoginForm, LoginFormFields } from '~/modules/auth/forms/LoginForm';
import { routes } from '~/routes/routes';

import { LoginCard } from './components/LoginCard';

interface ILoginScreenProps {}

export const LoginScreen: React.FC<ILoginScreenProps> = observer(() => {
  const { authStore } = useRootStore();
  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    authStore.loginForm.setValue<LoginForm>(LoginFormFields.email, 'admin@admin.ru');
    authStore.loginForm.setValue<LoginForm>(LoginFormFields.password, '123456');
  }, []);

  // Handlers
  const handleSetDefaultValue = () => {
    authStore.setLoginForm({ email: 'test@gmail.com', password: '123456' });
  };

  const handleLogin = () => {
    authStore.login(authStore.loginForm, () => {
      navigate(routes.MainScreen.path);
    });
  };

  return (
    <LoginCard>
      <Typography variant="h1">LoginScreen</Typography>
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <Button variant="contained" color="primary" onClick={handleSetDefaultValue}>
            Задать дефолтные значения
          </Button>
        </Box>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Войти
        </Button>
      </Box>
    </LoginCard>
  );
});
