export { default } from 'next-auth/middleware'
// protected routes!
export const config = { matcher: ['/dashboard'] }