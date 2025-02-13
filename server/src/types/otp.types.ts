// src/types/otp.types.ts
export interface OTPData {
    otp: string;
    expiresAt: Date;
    verified: boolean;
  }
  
  export interface OTPStore {
    [key: string]: OTPData;  // key can be email or phone
  }
  
  export interface SendOTPResponse {
    success: boolean;
    message: string;
  }
  
  export interface VerifyOTPResponse {
    success: boolean;
    message: string;
  }