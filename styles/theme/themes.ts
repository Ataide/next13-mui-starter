import { red, amber, deepOrange, deepPurple, blue } from "@mui/material/colors";
import { ThemeOptions } from '@mui/material/styles';

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: amber[700],
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#1f283e",
      paper: "#1e1e1e",
      // paper: '#3c3836', // This is the background
      // default: "#121212",      
    },

  },
  typography: {
    // fontSize: 14    


  }
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: blue['A200']
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#f8f8f8",
    }
  }
};


