export interface LoginFormData {
  username: string;  // This will accept username/email/mobile
  password: string;
}

export interface LoginResponse {
  user: {
    id: string;
    username: string;
    email: string;
    mobileNo?: string;
    role: 'admin' | 'donor' | 'ngo';
  };
  token: string;
}

export interface RegisterFormData {
  username: string;
  mobileNo: string;
  email: string;
  role: 'admin' | 'donor' | 'ngo';
  password: string;
}

export interface OTPStatus {
  email: boolean;
  mobile: boolean;
}

export interface OTPVerification {
  email: string;
  mobile: string;
}

export interface SendOTPRequest {
  identifier: string;
  type: 'email' | 'mobile';
}

export interface VerifyOTPRequest {
  identifier: string;
  otp: string;
}

export interface OTPResponse {
  success: boolean;
  message: string;
}