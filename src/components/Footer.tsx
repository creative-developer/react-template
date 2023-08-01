import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const Footer: React.FC = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="xl">
        <Box py={3} minHeight={60}>
          <Typography>Footer</Typography>
        </Box>
      </Container>
    </footer>
  );
};

const useStyles = makeStyles()(theme => ({
  root: {
    marginTop: theme.spacing(10),
    backgroundColor: theme.palette.divider,
  },
}));
