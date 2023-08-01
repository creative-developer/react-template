import { AutocompleteClassKey } from '@mui/material';
import '@mui/material/styles';
import { Theme } from '@mui/material/styles';

import { CustomColors } from './colors';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

// Declare Mui custom typography
declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1Bold: React.CSSProperties;
    h1Medium: React.CSSProperties;
    h2Bold: React.CSSProperties;
    h2Medium: React.CSSProperties;
    h3Regular: React.CSSProperties;
    h3Medium: React.CSSProperties;
    h3Bold: React.CSSProperties;
    h4Regular: React.CSSProperties;
    h4Medium: React.CSSProperties;
    h4Bold: React.CSSProperties;
    h5Regular: React.CSSProperties;
    h5Medium: React.CSSProperties;
    h5Bold: React.CSSProperties;
    h6Regular: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1Bold?: React.CSSProperties;
    h1Medium?: React.CSSProperties;
    h2Bold: React.CSSProperties;
    h2Medium: React.CSSProperties;
    h3Regular: React.CSSProperties;
    h3Medium: React.CSSProperties;
    h3Bold: React.CSSProperties;
    h4Regular: React.CSSProperties;
    h4Medium: React.CSSProperties;
    h4Bold: React.CSSProperties;
    h5Regular: React.CSSProperties;
    h5Medium: React.CSSProperties;
    h5Bold: React.CSSProperties;
    h6Regular: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
    h1Medium: true;
    h2Bold: true;
    h2Medium: true;
    h3Regular: true;
    h3Medium: true;
    h3Bold: true;
    h4Regular: true;
    h4Medium: true;
    h4Bold: true;
    h5Regular: true;
    h5Medium: true;
    h5Bold: true;
    h6Regular: true;
  }
}

// Declare Mui colors
declare module '@mui/material/styles' {
  interface Palette {
    customColors: CustomColors;
    customColorsGray: CSSProperties['color'];
  }

  interface PaletteOptions {
    customColors: CustomColors;
  }
}

// Declare Mui breakpoints
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

// Custom overrides declare
declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiAutocomplete: AutocompleteClassKey;
  }
}

// Button overrides declare
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    customColorsGray: true;
  }
}

// IconButton overrides declare
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    black: true;
  }
}
