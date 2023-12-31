import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { routes } from '../../routes/routes';

export const NotFoundScreen: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" py={8}>
        <Box mb={2}>
          <Typography variant="h2">Ошибка 404</Typography>
        </Box>
        <Box mb={4}>
          <Typography>Страница не найдена</Typography>
        </Box>

        <Link to={routes.MainScreen.path} className="router-link">
          <Button variant="outlined" color="primary">
            На главную
          </Button>
        </Link>
      </Box>
    </Container>
  );
};
