// src/services/OTPService.ts
import { OTPStore, SendOTPResponse, VerifyOTPResponse } from '../types/otp.types';
import { emailService } from './EmailService';
import { smsService } from './SMSService';
import { logger } from '../utils/logger';
import { customAlphabet } from 'nanoid';

class OTPService {
  private otpStore: OTPStore = {};
  private generateNumericOTP = customAlphabet('0123456789', 6);


  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private validateMobile(mobile: string): boolean {
    const mobileRegex = /^\+91[0-9]{10}$/;
    return mobileRegex.test(mobile);
  }

  private async generateOTP(): Promise<string> {
    const { nanoid } = await import('nanoid');
    return nanoid(6).toUpperCase(); // 6-digit uppercase OTP
  }

  async sendOTP(identifier: string, type: 'email' | 'mobile'): Promise<SendOTPResponse> {
    try {
      logger.info(`Sending ${type} OTP to: ${identifier}`);

      // Input validation
      if (type === 'email' && !this.validateEmail(identifier)) {
        throw new Error('Invalid email address');
      } else if (type === 'mobile' && !this.validateMobile(identifier)) {
        throw new Error('Invalid mobile number');
      }

      const otp = await this.generateOTP();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

      // Store OTP
      this.otpStore[identifier] = {
        otp,
        expiresAt,
        verified: false,
        attempts: 0
      };

      if (type === 'email') {
        const emailResponse = await emailService.sendEmail({
          to: identifier,
          subject: 'Your FeedForward Verification Code',
          html: `
            <h1>FeedForward Verification</h1>
            <p>Your verification code is: <strong>${otp}</strong></p>
            <p>This code will expire in 10 minutes.</p>
          `
        });

        if (!emailResponse.success) {
          throw new Error(emailResponse.message);
        }
      } else if (type === 'mobile') {
        const smsResponse = await smsService.sendSMS({
          to: identifier,
          message: `Your FeedForward verification code is: ${otp}. It will expire in 10 minutes.`
        });

        if (!smsResponse.success) {
          throw new Error(smsResponse.message);
        }
      }

      logger.info(`OTP sent successfully to: ${identifier}`);
      return {
        success: true,
        message: `OTP sent to your ${type}`
      };

    } catch (error: any) {
      logger.error(`Failed to send OTP:`, error);
      return {
        success: false,
        message: error.message || `Failed to send OTP to ${type}`
      };
    }
  }

  async verifyOTP(identifier: string, otp: string): Promise<VerifyOTPResponse> {
    try {
      const storedData = this.otpStore[identifier];

      if (!storedData) {
        return {
          success: false,
          message: 'No OTP found for this identifier',
        };
      }

      if (new Date() > storedData.expiresAt) {
        delete this.otpStore[identifier];
        return {
          success: false,
          message: 'OTP has expired',
        };
      }

      if (storedData.otp !== otp) {
        return {
          success: false,
          message: 'Invalid OTP',
        };
      }

      storedData.verified = true;
      return {
        success: true,
        message: 'OTP verified successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || 'OTP verification failed',
      };
    }
  }

  isVerified(identifier: string): boolean {
    return this.otpStore[identifier]?.verified || false;
  }
}

export const otpService = new OTPService();