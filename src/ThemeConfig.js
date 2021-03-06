import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

  palette: {
    primary: {
      main: "#87d7be",
    },
    secondary: {
      main: "#069dba",
    },
    error: {
      main: "#ff63b1",
    },
    warning: {
      main: "#44d9e6",
    },
    info: {
      main: "#9d8a76",
    },
    success: {
      main: "#99e265",
    },
  },
  typography: {
    h1: {
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      fontWeight: 700,
    },
    h2: {
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      fontWeight: 700,
    },
    h3: {
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      fontWeight: 700,
    },
    h4: {
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      fontWeight: 500,
    },
    h5: {
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      fontWeight: 500,
    },
    h6: {
      fontFamily: [
        'Oswald',
        'sans-serif',
      ].join(','),
      fontWeight: 500,
    },
  }

});

export default theme