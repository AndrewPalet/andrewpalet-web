import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export let theme = createTheme({
  palette: {
    primary: {
      main: '#DAB88B',
      dark: '#2e85d4',
    },
    secondary: {
      main: '#B7CADB',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
    background: {
      default: '#ffffff',
    },
    success: {
      main: '#55ab68',
      light: '#48C830',
    },
    warning: {
      main: '#f38713',
    },
    error: {
      main: '#e78177',
    },
    divider: '#707070',
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
    },
    h3: {
      fontSize: 20,
      fontWeight: 500,
    },
    h4: {
      fontSize: 14,
      fontWeight: 500,
    },
    h5: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
      fontWeight: 300,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      fontSize: 16,
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: '#000',
          '&:hover': {
            background: 'transparent',
            color: '#F3E9DD',
          },
        },
        startIcon: {
          marginRight: '4px',
          '& > :nth-of-type(1)': {
            fontSize: '22px',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgb(221 221 221 / 50%)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#FFF',
          p: 0,
          boxShadow:
            '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          '& .MuiTooltip-arrow': {
            color: 'var(--white)',
          },
          '.MuiTooltip-arrow: before': {
            boxShadow: '1px 1px 1px 0px rgb(0 0 0 / 25%)',
          },
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)