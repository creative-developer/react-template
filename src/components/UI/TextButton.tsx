import { Button, ButtonProps, Theme } from '@mui/material';
import { forwardRef } from 'react';
import { makeStyles } from 'tss-react/mui';

interface ITextButtonProps extends ButtonProps {
  lowercase?: boolean;
  primaryUnderLine?: boolean;
}

export const TextButton: React.FC<ITextButtonProps> = forwardRef((props, ref) => {
  const { lowercase, children, className, primaryUnderLine = false, ...rest } = props;
  const { classes, cx } = useStyles();

  return (
    <Button
      variant="text"
      disableRipple
      {...rest}
      ref={ref}
      className={cx(className, {
        [classes.lowercase]: !!lowercase,
        [classes.btn]: !!primaryUnderLine,
      })}
    >
      {children}
    </Button>
  );
});

const useStyles = makeStyles()((theme: Theme) => ({
  lowercase: {
    textTransform: 'none',
    letterSpacing: 0,
    fontWeight: 400,
  },
  btn: {
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: '50%',
      width: '100%',
      height: 1,
      borderRadius: 1,
      background: theme.palette.customColors.blue,
      transform: 'translateX(-50%)',
      transition: theme.transitions.create(['visibility', 'opacity']),
    },
    '&:hover': {
      '&:after': {
        opacity: 0,
        visibility: 'hidden',
      },
    },
  },
}));
