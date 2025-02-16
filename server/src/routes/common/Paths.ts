export default {
  Base: '/api',
  Auth: {
    Base: '/auth',
    Login: '/login',
    Logout: '/logout',
    Register: '/register',
  },
  OTP: {
    Base: '/otp',
    Send: '/send',
    Verify: '/verify',
  },
  Docs: '/docs',
} as const;
