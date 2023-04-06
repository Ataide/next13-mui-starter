'use client'

import "../styles/output.css";

import { PrivateLayout } from '../components/layout/privateLayout';
import { usePathname } from 'next/navigation';


// export const metadata = {
//   title: 'iBase - Soluções',
//   description: 'Estudo de caso do NextJs 13',
// }

const publicRoutes = ['/login', '/registro']

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  
  return (
    <html lang="pt-br">
      
        <body>
          {!publicRoutes.includes(pathname) ? (
            <PrivateLayout>
              {children}
            </PrivateLayout>  
            ) : (children)}
        </body>
     
    </html>
  )
}
