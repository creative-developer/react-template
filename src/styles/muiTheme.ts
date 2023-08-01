import {
  alpha,
  buttonClasses,
  buttonGroupClasses,
  checkboxClasses,
  iconButtonClasses,
  menuItemClasses,
  outlinedInputClasses,
  paginationItemClasses,
  radioClasses,
  selectClasses,
  switchClasses,
  tableSortLabelClasses,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { Colors } from './colors';

export let theme = createTheme();

theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1208 + 48,
    },
  },
  palette: {
    primary: { main: Colors.blue },
    secondary: { main: Colors.black },
    error: { main: Colors.red },
    customColors: {
      black: Colors.black,
      white: Colors.white,
      blue: Colors.blue,
      gradientBlue: Colors.blue,
      red: Colors.red,
    },
  },
  typography: {
    fontFamily: "'Jost', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: 36,
      lineHeight: '52px',
    },
    h1Bold: {
      fontWeight: 700,
      fontSize: 30,
      lineHeight: '43px',
    },
    h1Medium: {
      fontWeight: 500,
      fontSize: 30,
      lineHeight: '43px',
    },
    h2Bold: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: '29px',
    },
    h2Medium: {
      fontWeight: 500,
      fontSize: 20,
      lineHeight: '29px',
    },
    h3Regular: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '23px',
    },
    h3Medium: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '23px',
    },
    h3Bold: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '23px',
    },
    h4Regular: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '20px',
    },
    h4Medium: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '20px',
    },
    h4Bold: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '20px',
    },
    h5Regular: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '17px',
    },
    h5Medium: {
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '17px',
    },
    h5Bold: {
      fontWeight: 700,
      fontSize: 12,
      lineHeight: '17px',
    },
    h6Regular: {
      fontWeight: 400,
      fontSize: 10,
      lineHeight: '14px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: 375,
          color: Colors.black,
          // backgroundColor: '#3E3E3E !important',
        },
        main: {
          flex: '1 0 auto',
        },
        '#root': {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        '.router-link': {
          textDecoration: 'none',
        },
        img: {
          width: 'auto',
          maxWidth: '100%',
          height: 'auto',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { color: 'customColorsGray', variant: 'text' },
          style: {
            position: 'relative',
            // color: Colors.gray,
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -1,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              height: 1,
              // backgroundColor: Colors.gray,
              borderRadius: 1,
              transition: theme.transitions.create('background-color'),
            },
            '&:hover': {
              color: Colors.black,
              '&:after': {
                backgroundColor: Colors.black,
              },
            },
          },
        },
      ],
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          fontSize: 16,
          lineHeight: '16px',
          textAlign: 'center',
          textTransform: 'initial',
        },
        text: {
          backgroundColor: 'transparent',
          transition: 'all .4s ease',
          minWidth: 'initial',
          padding: 0,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          [`& .${buttonClasses.endIcon} i`]: {
            fontSize: 13,
          },
        },
        textPrimary: {
          // color: Colors.purple,
          '&:after': {
            display: 'block',
          },
          '&:hover': {
            // color: alpha(Colors.purple, 0.8),
            backgroundColor: 'transparent',
          },
        },
        textSecondary: {
          color: Colors.black,
          '&.active': {
            // color: Colors.purple,
          },
          '&:hover': {
            '&:not(.active)': {
              color: alpha(Colors.black, 0.8),
              backgroundColor: 'transparent',
            },
          },
        },
        outlined: {
          position: 'relative',
          padding: '11.5px 30px 10.5px',
          fontWeight: 700,
          borderRadius: 5,
          overflow: 'hidden',
          zIndex: 1,
        },
        outlinedPrimary: {
          color: Colors.black,
          // border: `1px solid ${Colors.purple}`,
          '&:not([disabled])': {
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // background: Colors.hoverPurpleGradient,
              opacity: 0,
              visibility: 'hidden',
              zIndex: -2,
              transition: 'all 0.6s ease',
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: 0,
              boxShadow: 'inset 0px 5px 6px #8280E4',
              transition: 'all 0.6s ease',
              visibility: 'hidden',
              zIndex: -1,
            },
            '&:hover:not(.active)': {
              borderColor: 'transparent',
              color: Colors.white,
              '&:after': {
                opacity: 1,
                visibility: 'visible',
              },
            },
            '&:active': {
              '&:before': {
                opacity: 1,
                visibility: 'visible',
              },
            },
          },
          '&.active': {
            // background: Colors.purple,
            // borderColor: Colors.purple,
            color: Colors.white,
          },
          '&.Mui-disabled': {
            // color: Colors.gray,
            // background: Colors.lightBlue,
            // borderColor: Colors.lightBlue,
          },
        },
        contained: {
          position: 'relative',
          fontWeight: 700,
          borderRadius: 5,
          overflow: 'hidden',
          zIndex: 1,
          transition: 'all 0.6s ease',
          willChange: 'opacity, visibility',
          boxShadow: 'none',
        },
        containedPrimary: {
          color: Colors.white,
          padding: '13px 30px 11px',
          '&:not([disabled])': {
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // background: Colors.mainGradient,
              zIndex: -1,
              transition: 'all 0.6s ease',
              willChange: 'opacity, visibility',
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // background: Colors.hoverMainGradient,
              opacity: 0,
              visibility: 'hidden',
              zIndex: -2,
              transition: 'all 0.6s ease',
              willChange: 'opacity, visibility',
            },
            '&:hover': {
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              '&:after': {
                opacity: 0,
                visibility: 'hidden',
              },
              '&:before': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:active': {
                '&:after': {
                  opacity: 1,
                  visibility: 'visible',
                },
              },
            },
          },
          '&.Mui-disabled': {
            // color: Colors.gray,
            // background: Colors.lightBlue,
            // borderColor: Colors.lightBlue,
          },
        },
        containedInfo: {
          background: Colors.white,
          color: Colors.black,
          fontWeight: 400,
          padding: '12px 30px 10px',
          // border: `1.5px solid ${Colors.purple}`,
          [`& .${buttonClasses.startIcon} > i`]: {
            fontSize: 12,
          },
          [`& .${buttonClasses.endIcon} > i`]: {
            fontSize: 12,
          },
          '&:not([disabled])': {
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // background: Colors.whiteBlueGradient,
              opacity: 0,
              visibility: 'hidden',
              transition: 'all 0.6s ease',
              willChange: 'opacity, visibility',
              zIndex: -1,
            },
            '&:hover, &.active': {
              background: Colors.white,
              color: Colors.black,
              boxShadow: 'none',
              '&:after': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:active': {
                '&:after': {
                  opacity: 0,
                  visibility: 'hidden',
                },
              },
            },
          },
          '&.Mui-disabled': {
            // color: Colors.gray,
            // background: Colors.lightBlue,
            // borderColor: Colors.grayDivider,
          },
        },
        containedSecondary: {
          // background: Colors.purple,
          color: Colors.white,
          fontWeight: 700,
          padding: '13px 30px 11px',
          border: 'none',
          [`& .${buttonClasses.startIcon} > i`]: {
            fontSize: 12,
          },
          [`& .${buttonClasses.endIcon} > i`]: {
            fontSize: 12,
          },
          '&:not([disabled])': {
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // background: Colors.hoverPurpleGradient,
              opacity: 0,
              visibility: 'hidden',
              transition: theme.transitions.create('all'),
              willChange: 'opacity, visibility',
              zIndex: -1,
            },
            '&:hover': {
              color: Colors.white,
              boxShadow: 'none',
              '&:after': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:active': {
                // background: Colors.purple,
                color: Colors.white,
                '&:after': {
                  opacity: 0,
                  visibility: 'hidden',
                },
              },
            },
          },
          [`&.${buttonClasses.disabled}`]: {
            // color: Colors.gray,
            // background: Colors.lightBlue,
          },
        },
        containedError: {
          color: Colors.white,
          padding: '13px 30px 11px',
          // background: Colors.red,
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // background: Colors.whiteBlueGradient,
            transition: 'all 0.6s ease',
            willChange: 'opacity, visibility',
            visibility: 'hidden',
            opacity: 0,
            zIndex: -1,
          },
          '&:not([disabled])': {
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // background: Colors.gradientRed,
              zIndex: -1,
              transition: 'all 0.6s ease',
              opacity: 0,
              visibility: 'hidden',
              willChange: 'opacity, visibility',
            },
            '&:hover': {
              // backgroundColor: Colors.red,
              border: 'none',
              boxShadow: 'none',
              '&:after': {
                opacity: 1,
                visibility: 'visible',
              },
              '&:active': {
                // background: Colors.red,
                '&:after': {
                  opacity: 0,
                  visibility: 'hidden',
                },
              },
            },
          },
          '&.Mui-disabled': {
            // color: Colors.grayDivider,
            background: 'transparent',
            // borderColor: Colors.lightBlue,
            '&:before': {
              opacity: 1,
              visibility: 'visible',
            },
          },
        },
        endIcon: {
          marginLeft: 8,
          marginRight: 0,
        },
        startIcon: {
          marginLeft: 0,
          marginRight: 8,
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        groupedContained: {
          [`&.${buttonGroupClasses.grouped}`]: {
            position: 'relative',
            fontSize: 13,
            color: Colors.black,
            minWidth: 29,
            padding: '12.5px 7.5px',
            // border: `1px solid ${Colors.purple}`,
            '&:not(:last-of-type)': {
              borderRight: 0,
              '&:before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                right: 0,
                width: 1,
                height: 11,
                transform: 'translateY(-50%)',
                // background: Colors.grayDivider,
              },
            },
            '&:not(:first-of-type)': {
              borderLeft: 0,
            },
          },
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { color: 'black' },
          style: {
            color: Colors.black,
            '&:hover': {
              // color: Colors.purple,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
        },
        sizeMedium: {
          padding: '17.5px',
          fontSize: 20,
        },
        sizeSmall: {
          fontSize: 20,
          padding: 5,
        },
        colorSecondary: {
          // color: Colors.gray,
          transition: theme.transitions.create('color'),
          '&.active': {
            // color: Colors.purple,
          },
          '&:hover': {
            // color: Colors.purple,
          },
        },
        colorPrimary: {
          position: 'relative',
          color: Colors.white,
          // background: Colors.purple,
          transition: theme.transitions.create('all'),
          '&:not([disabled])': {
            '&:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // background: Colors.hoverPurpleGradient,
              opacity: 0,
              visibility: 'hidden',
              transition: 'all 0.4s ease',
              willChange: 'opacity, visibility',
              zIndex: -1,
            },
            '&:hover': {
              color: Colors.white,
              // background: Colors.purple,
              '&:after': {
                opacity: 1,
                visibility: 'visible',
              },
            },
          },
          [`&.${iconButtonClasses.disabled}`]: {
            // color: Colors.gray,
            // background: Colors.whiteBlueGradient,
            '&:before': {
              opacity: 1,
              visibility: 'visible',
            },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 0,
          width: 30,
          height: 16,
        },
        thumb: {
          width: 14,
          height: 14,
          background: Colors.white,
        },
        switchBase: {
          padding: 0,
          margin: 0,
          top: 1,
          left: 1,
          [`&.${switchClasses.disabled}`]: {
            opacity: 0.4,
            [`& + .${switchClasses.track}`]: {
              opacity: 1,
            },
            [`&.${switchClasses.checked}`]: {
              color: Colors.white,
            },
          },
          [`&.${switchClasses.checked}`]: {
            transform: 'translateX(14px)',
            [`& + .${switchClasses.track}`]: {
              opacity: 1,
            },
          },
        },
        track: {
          borderRadius: 16,
          // background: Colors.grayDivider,
          opacity: 1,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        inputMultiline: {
          padding: 0,
        },
        root: {
          borderRadius: 5,
          boxShadow: 'none',
          backgroundColor: Colors.white,
          position: 'relative',
          fontSize: 16,
          [`& .${iconButtonClasses.root}`]: {
            // color: Colors.darkGrey,
          },
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            // borderColor: Colors.gray,
          },
          [`&:hover:not(.${outlinedInputClasses.disabled}):not(.${outlinedInputClasses.error})`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              // borderColor: Colors.purple,
            },
          },
          [`&:focus:not(.${outlinedInputClasses.disabled})`]: {
            outline: 'none',
          },
          [`&.${outlinedInputClasses.focused}:not(.${outlinedInputClasses.disabled}):not(.${outlinedInputClasses.error})`]:
            {
              [`& .${outlinedInputClasses.notchedOutline}`]: {
                // borderColor: Colors.purple,
                borderWidth: '2px !important',
              },
              [`& .${iconButtonClasses.root}`]: {
                color: Colors.black,
              },
            },
          [`&.${outlinedInputClasses.disabled}`]: {
            background: Colors.white,
            // color: Colors.grayDivider,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              // borderColor: Colors.grayDivider,
            },
          },
          [`&.${outlinedInputClasses.error}`]: {
            // color: Colors.red,
            [`& .${outlinedInputClasses.input}`]: {
              // color: Colors.red,
              // WebkitTextFillColor: Colors.red,
            },
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              // borderColor: Colors.red,
            },
          },
        },
        adornedStart: {
          paddingLeft: 0,
          [`& .${outlinedInputClasses.input}`]: {
            paddingLeft: '6px',
          },
        },
        adornedEnd: {
          paddingRight: 0,
          [`& .${outlinedInputClasses.input}`]: {
            paddingRight: '6px',
          },
        },
        input: {
          padding: '8.5px 16px',
          height: 'auto',
        },
        notchedOutline: {
          borderColor: 'transparent',
          padding: 0,
          borderWidth: '1px !important',
        },
        colorSecondary: {
          '&$focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              // borderColor: Colors.gray,
              borderWidth: 1,
            },
          },
        },
        multiline: {
          padding: '16px 24px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: 'block',
          marginBottom: 8,
          fontSize: 12,
          lineHeight: '17px',
          color: Colors.black,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '15px',
          color: Colors.black,
        },
        contained: {
          marginLeft: 0,
          marginRight: 0,
          marginTop: 5,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          // border: `1px solid ${Colors.grayDivider}`,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1Bold: 'h1',
          h1Medium: 'h1',
          h2Bold: 'h2',
          h2Medium: 'h2',
          h3Regular: 'h3',
          h3Medium: 'h3',
          h3Bold: 'h3',
          h4Regular: 'h4',
          h4Medium: 'h4',
          h4Bold: 'h4',
          h5Regular: 'h5',
          h5Medium: 'h5',
          h5Bold: 'h5',
          h6Regular: 'h6',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: Colors.black,
        },
        outlined: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 100%',
          background: Colors.white,
          // border: `0.5px solid ${Colors.grayDivider}`,
          boxShadow: '0px 4px 4px rgba(169, 169, 169, 0.12)',
          borderRadius: 4,
          height: '100%',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '20px',
          color: Colors.black,
        },
        [`.${menuItemClasses.selected}`]: {},
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 33,
          height: 33,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: theme.spacing(6.5),
          outline: 'none',
          borderRadius: 10,
          margin: theme.spacing(4),
          background: Colors.white,
          border: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        firstLast: {
          margin: 0,
        },
        root: {
          position: 'relative',
          margin: '0 2.5px',
          fontWeight: 500,
          fontSize: 13,
          lineHeight: '18px',
          overflow: 'hidden',
          zIndex: 1,
        },
        page: {},
        previousNext: {
          margin: '0 4px',
        },
        text: {},
        outlined: {
          borderRadius: 8,
        },

        outlinedPrimary: {
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // background: Colors.hoverPurpleGradient,
            zIndex: -1,
            opacity: 0,
            visibility: 'hidden',
            transition: theme.transitions.create(['opacity', 'visibility']),
          },
          [`&:not(.${paginationItemClasses.ellipsis})`]: {
            // border: `1px solid ${Colors.grayDivider}`,
          },
          [`&.${paginationItemClasses.selected}`]: {
            color: Colors.white,
            '&:after': {
              opacity: 1,
              visibility: 'visible',
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'inherit',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: 'transparent',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: 14,
          color: Colors.black,
          lineHeight: '20px',
          borderBottom: 'none',
        },
        head: {
          padding: theme.spacing(0, 1.5),
        },
        body: {
          padding: theme.spacing(1.5),
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          [`&.${tableSortLabelClasses.active}`]: {
            [`& .${tableSortLabelClasses.icon}`]: {
              // color: Colors.darkGrey,
            },
          },
          '&:hover': {
            // color: Colors.darkGrey,
            [`& .${tableSortLabelClasses.icon}`]: {
              opacity: 1,
            },
          },
        },
        icon: {
          fontSize: 10,
          margin: 0,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fontSize: 11,
          right: 12,
        },
        select: {
          [`&.${selectClasses.disabled}`]: {
            // WebkitTextFillColor: Colors.grayDivider,
          },
          [`&.${outlinedInputClasses.input}`]: {
            paddingRight: 39,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          marginRight: 8,
        },
        colorSecondary: {
          color: Colors.white,
          [`&.${radioClasses.checked}`]: {
            color: Colors.white,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          marginRight: 8,
        },
        colorSecondary: {
          color: Colors.white,
          [`&.${checkboxClasses.checked}`]: {
            color: Colors.white,
          },
        },
      },
    },
  },
});
