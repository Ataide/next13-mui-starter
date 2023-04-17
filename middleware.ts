export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/:path*', '/dashboard', '/app/:path*', '/other/:path*', '/help/:path*']
}