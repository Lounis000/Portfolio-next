// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const isAuthenticated = req.cookies.get('isAuthenticated')?.value;

  if (!isAuthenticated) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/feedbacks',
};
