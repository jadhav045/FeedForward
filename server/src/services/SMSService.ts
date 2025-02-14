// src/services/SMSService.ts
import twilio from 'twilio';
import { logger } from '../utils/logger';
import { SMSOptions, SMSResponse } from '../types/sms.types';

class SMSService {
  private client: twilio.Twilio;
  private from: string;

  constructor() {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    this.from = process.env.TWILIO_PHONE_NUMBER || '';

    if (!accountSid || !authToken || !this.from) {
      logger.error('Missing Twilio configuration');
      throw new Error('SMS service configuration failed');
    }

    this.client = twilio(accountSid, authToken);
  }

  async sendSMS(options: SMSOptions): Promise<SMSResponse> {
    try {
      // Format phone number to E.164 format
      const formattedNumber = this.formatPhoneNumber(options.to);

      logger.info(`Sending SMS to: ${formattedNumber}`);
      
      const message = await this.client.messages.create({
        body: options.message,
        from: this.from,
        to: formattedNumber
      });

      logger.info(`SMS sent successfully. SID: ${message.sid}`);
      return {
        success: true,
        message: 'SMS sent successfully'
      };
    } catch (error: any) {
      logger.error('SMS sending failed:', error);
      return {
        success: false,
        message: error.message || 'Failed to send SMS'
      };
    }
  }

  private formatPhoneNumber(number: string): string {
    // Remove any non-digit characters
    const cleaned = number.replace(/\D/g, '');
    
    // Add '+' prefix if not present
    return cleaned.startsWith('+') ? cleaned : `+${cleaned}`;
  }
}

export const smsService = new SMSService();