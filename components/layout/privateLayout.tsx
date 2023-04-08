'use client'

import { ThemeProvider, CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import { useMemo, useState } from "react";
import ResponsiveDrawer from "./drawer"; "./drawer";
import { darkTheme, lightTheme } from '../../styles/theme/themes';
import { SessionProvider } from "next-auth/react";

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
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <ResponsiveDrawer toggleDarkMode={toggleDarkMode}>
              {children}
          </ResponsiveDrawer>
      </ThemeProvider>
    </SessionProvider>
  </>
  )
}