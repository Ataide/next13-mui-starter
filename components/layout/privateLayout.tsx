'use client'

import { ThemeProvider, CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import { useMemo, useState } from "react";
import MiniDrawer from "./drawer";
import { darkTheme, lightTheme } from '../../styles/theme/themes';

export function PrivateLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(true);


  const theme = useMemo(
    () => darkMode ? createTheme(darkTheme) : createTheme(lightTheme), [darkMode]
  );

  const toggleDarkMode = (checked: boolean) => {
    if (checked === false) setDarkMode(prefersDarkMode);
    else setDarkMode(checked);
  };

  return (
    <>
     <ThemeProvider theme={theme}>
        <CssBaseline />
          <MiniDrawer toggleDarkMode={toggleDarkMode}>
              {children}
          </MiniDrawer>
      </ThemeProvider>
    
    </>
  )
}