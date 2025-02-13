import nodemailer from 'nodemailer';
import { EmailOptions, EmailResponse, RateLimitConfig } from '../types/email.types';
import { logger } from '../utils/logger';

class EmailService {
  private transporter: nodemailer.Transporter;
  private rateLimitStore: Map<string, { attempts: number; resetTime: number }>;
  private readonly rateLimitConfig: RateLimitConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxAttempts: 5 // 5 attempts per window
  };

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    this.rateLimitStore = new Map();

    // Verify transporter connection
    this.verifyConnection();
  }

  private async verifyConnection(): Promise<void> {
    try {
      await this.transporter.verify();
      logger.info('Email service connected successfully');
    } catch (error) {
      logger.error('Email service connection failed:', error);
      throw new Error('Email service configuration failed');
    }
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private checkRateLimit(email: string): boolean {
    const now = Date.now();
    const userLimit = this.rateLimitStore.get(email);

    if (!userLimit) {
      this.rateLimitStore.set(email, {
        attempts: 1,
        resetTime: now + this.rateLimitConfig.windowMs
      });
      return true;
    }

    if (now > userLimit.resetTime) {
      this.rateLimitStore.set(email, {
        attempts: 1,
        resetTime: now + this.rateLimitConfig.windowMs
      });
      return true;
    }

    if (userLimit.attempts >= this.rateLimitConfig.maxAttempts) {
      logger.warn(`Rate limit exceeded for email: ${email}`);
      return false;
    }

    userLimit.attempts++;
    return true;
  }

  async sendEmail(options: EmailOptions): Promise<EmailResponse> {
    try {
      // Input validation
      if (!options.to || !this.validateEmail(options.to)) {
        logger.error('Invalid email address:', options.to);
        return {
          success: false,
          message: 'Invalid email address'
        };
      }

      // Rate limiting
      if (!this.checkRateLimit(options.to)) {
        return {
          success: false,
          message: 'Too many attempts. Please try again later.'
        };
      }

      // Send email
      logger.info(`Sending email to: ${options.to}`);
      await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        ...options
      });

      logger.info(`Email sent successfully to: ${options.to}`);
      return {
        success: true,
        message: 'Email sent successfully'
      };

    } catch (error) {
      logger.error('Email sending failed:', error);
      return {
        success: false,
        message: error.message || 'Failed to send email'
      };
    }
  }

  // Cleanup old rate limit entries
  cleanup(): void {
    const now = Date.now();
    for (const [email, limit] of this.rateLimitStore.entries()) {
      if (now > limit.resetTime) {
        this.rateLimitStore.delete(email);
      }
    }
  }
}

export const emailService = new EmailService();

// Run cleanup every hour
setInterval(() => {
  emailService.cleanup();
}, 60 * 60 * 1000);