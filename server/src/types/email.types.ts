export interface EmailOptions {
    to: string;
    subject: string;
    html: string;
  }
  
  export interface EmailResponse {
    success: boolean;
    message: string;
  }
  
  export interface RateLimitConfig {
    windowMs: number;  // Time window in milliseconds
    maxAttempts: number;  // Max attempts per window
  }