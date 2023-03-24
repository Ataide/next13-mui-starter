"use client";

import "../styles/output.css";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import SideBar from '../components/layout/sidebar';
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import MiniDrawer from '../components/layout/main';

// export const metadata = {
//   title: 'iBase - Soluções',
//   description: 'Estudo de caso do NExtJs 13',
// }

const lightTheme = createTheme(lightThemeOptions);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">

      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body>
          <MiniDrawer>
              {children}
          </MiniDrawer>
        </body>
      </ThemeProvider>
    </html>
  )
}
