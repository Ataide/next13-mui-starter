'use client'

import { ThemeProvider, CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import { useMemo, useState } from "react";
import lightThemeOptions from "../../styles/theme/lightThemeOptions";
import MiniDrawer from "./main";

export function PrivateLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const themeString = (b: boolean) => (b ? "dark" : "light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeString(darkMode)
        }
      }),
    [darkMode]
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