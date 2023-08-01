import { Box, BoxProps, CircularProgress, Grid, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface ILoaderProps extends BoxProps {
  size?: number;
  isAbsolute?: boolean;
  isFixed?: boolean;
  withoutOpacity?: boolean;
}

export const Loader: React.FC<ILoaderProps> = props => {
  const {
    color,
    isFixed,
    size = 40,
    zIndex = 2,
    minHeight = 0,
    isAbsolute = false,
    withoutOpacity = false,
    ...rest
  } = props;
  const { classes, cx } = useStyles();
  const { palette } = useTheme();

  const rendeLoader = () => {
    return (
      <Grid container justifyContent="center" alignItems="center">
        <Box sx={{ display: 'flex', color: color || palette.primary.main }}>
          <CircularProgress size={size} color="inherit" />
        </Box>
      </Grid>
    );
  };

  if (isFixed) {
    return (
      <Box className={classes.isFixed} sx={{ minHeight, zIndex }} {...rest}>
        <div
          className={cx(classes.overline, {
            [classes.withOpactiy]: !withoutOpacity,
            [classes.withoutOpacity]: withoutOpacity,
          })}
        ></div>

        {rendeLoader()}
      </Box>
    );
  }

  if (isAbsolute) {
    return (
      <Box className={classes.isAbsolute} sx={{ minHeight, zIndex }} {...rest}>
        <div
          className={cx(classes.overline, {
            [classes.withOpactiy]: !withoutOpacity,
            [classes.withoutOpacity]: withoutOpacity,
          })}
        ></div>

        {rendeLoader()}
      </Box>
    );
  }

  return (
    <Box className={classes.root} sx={{ minHeight, zIndex }} {...rest}>
      {rendeLoader()}
    </Box>
  );
};

const useStyles = makeStyles()({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexBasis: '100%',
  },
  isAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overline: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  withOpactiy: {
    backgroundColor: 'rgba(255,255,255, .7)',
  },
  withoutOpacity: {
    backgroundColor: 'rgba(255,255,255, 1)',
  },
});
