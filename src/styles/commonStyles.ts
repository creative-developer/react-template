import { makeStyles } from 'tss-react/mui';

/* eslint-disable tss-unused-classes/unused-classes */
export const useCommonStyles = () => {
  const { classes, ...rest } = useStyles();

  return { ...rest, commonClasses: classes };
};

const useStyles = makeStyles()(() => ({
  routerLink: {
    textDecoration: 'none',
  },
  inlineBlock: {
    display: 'inline-block',
  },
  aic: {
    display: 'flex',
    alignItems: 'center',
  },
  textUnderLine: {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: -1,
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'currentColor',
      width: '100%',
      height: 1,
    },
  },
  bolder: {
    fontWeight: 'bold',
  },
}));
