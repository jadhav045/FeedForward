// src/types/otp.types.ts
export interface OTPData {
    otp: string;
    expiresAt: Date;
    verified: boolean;
    attempts: Number;
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

  export interface OTPRequest {
    identifier: string;
    type: 'email' | 'mobile';
  }
  
  export interface OTPVerifyRequest {
    identifier: string;
    otp: string;
  }
  
  export interface OTPResponse {
    success: boolean;
    message: string;
  }