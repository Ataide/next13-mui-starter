import { red } from "@mui/material/colors";
import { ThemeOptions } from '@mui/material/styles';

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: '#aaf836'
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#1f1a24",
      paper: '#3c3836', // This is the background
      // default: "#121212",
      
    }
  },
  typography: {

  }
};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    }
    // background: {
    //   default: "#fff",
    // }
  }
};


