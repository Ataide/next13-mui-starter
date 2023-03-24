'use client'

import "../styles/output.css";

import { PrivateLayout } from '../components/layout/privateLayout';

// export const metadata = {
//   title: 'iBase - Soluções',
//   description: 'Estudo de caso do NextJs 13',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
        <body>
            <PrivateLayout>
              {children}
            </PrivateLayout>
        </body>
     
    </html>
  )
}
