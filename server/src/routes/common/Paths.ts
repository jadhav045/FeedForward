import { profile } from "console";

export default {
  Base: '/api',
  Auth: {
    Base: '/auth',
    Login: '/login',
    Logout: '/logout',
    Register: '/register',
    updateProfile: '/updateProfile',
  },
  OTP: {
    Base: '/otp',
    Send: '/send',
    Verify: '/verify',
  },
  Docs: '/docs',
  Cloudinary: { 
    Base: '/cloud',
    Upload: '/upload',
  }
} as const;
