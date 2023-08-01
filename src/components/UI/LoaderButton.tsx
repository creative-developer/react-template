import { Button, ButtonProps } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { ReactNotification } from '~/base/ui/ReactNotification';

import { Loader } from './Loader';

interface ILoaderButtonProps extends ButtonProps {
  loading: boolean;
}

export const LoaderButton: React.FC<ILoaderButtonProps> = props => {
  const { loading, variant, color, children, onClick, ...rest } = props;
  const { classes } = useStyles();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      return loading ? ReactNotification.showError('Идёт загрузка, пожалуйста подождите...') : onClick(e);
    }
  };

  return (
    <Button variant={variant} className={classes.btn} color={color} {...rest} onClick={handleClick}>
      {children}
      {loading && <Loader className={classes.loader} size={14} color={color} />}
    </Button>
  );
};

const useStyles = makeStyles()(theme => ({
  btn: {
    whiteSpace: 'nowrap',
  },
  loader: {
    marginLeft: theme.spacing(1),
  },
}));
