"use client";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { useMemo, useState } from "react";
import { LayoutProvider } from "../../contexts/layoutContext";
import { darkTheme, lightTheme } from "../../styles/theme/themes";
import ResponsiveDrawer from "./drawer";
("./drawer");

export function PrivateLayout({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () => (darkMode ? createTheme(darkTheme) : createTheme(lightTheme)),
    [darkMode]
  );

  const toggleDarkMode = (checked: boolean) => {
    if (checked === false) setDarkMode(prefersDarkMode);
    else setDarkMode(checked);
  };

  return (
    <>
      <SessionProvider>
        <LayoutProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveDrawer toggleDarkMode={toggleDarkMode}>
              {children}
            </ResponsiveDrawer>
          </ThemeProvider>
        </LayoutProvider>
      </SessionProvider>
    </>
  );
}
