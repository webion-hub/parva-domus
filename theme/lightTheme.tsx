import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import * as _ from '@mui/material/styles/createPalette';

interface TypeLayoutMaxWidth {
  readonly appbar: number;
  readonly footer: number;
  readonly section: number;
}

declare module '@mui/material/styles' {
  interface Theme {
    readonly layoutMaxWidth?: TypeLayoutMaxWidth;
  }

  interface ThemeOptions {
    readonly layoutMaxWidth?: Partial<TypeLayoutMaxWidth>;
  }
}

const fontFamily = "'Inter', sans-serif;";

export const lightTheme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#424a94'
    },
    secondary: {
      main: '#989EA7'
    },
    info: {
      main: '#dddddd'
    },
    text: {
      primary: '#000B2C',
      secondary: '#989EA7'
    }
  },
  layoutMaxWidth: {
    section: 1200,
    appbar: 1200,
    footer: 1200
  },
  typography: {
    fontFamily: [fontFamily, 'sans-serif'].join(','),
    h4: {
      fontWeight: 600
    },
    h3: {
      fontWeight: 600
    },
    body1: {
      fontWeight: 300,
      fontSize: 18
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: fontFamily,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 11,
          textTransform: 'capitalize',
        },
        sizeLarge: {
          paddingBlock: 12,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 20px 70px rgba(0, 0, 0, 0.09)',
          borderRadius: 10,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none',
          "&.MuiAccordion-root:before": {
            backgroundColor: "transparent"
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px !important',
          "&::before": { display: 'none' },
          "&.Mui-focused": {
            borderBottomLeftRadius: '4px !important',
            borderBottomRightRadius: '4px !important',
          }
        }
      }
    }
  }
}))