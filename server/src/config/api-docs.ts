// src/config/api-docs.ts
import { ApiDocumentation } from '../types/docs.types';
import Paths from '../routes/common/Paths';
import HttpStatusCodes from '../common/HttpStatusCodes';

export const apiDocs: ApiDocumentation = {
  sections: [
    {
      title: 'Authentication',
      description: 'User authentication and registration endpoints',
      endpoints: [
        {
          path: Paths.Auth.Base + Paths.Auth.Register,
          method: 'POST',
          description: 'Register a new user',
          requestBody: {
            username: 'string',
            email: 'string',
            password: 'string',
            role: '"admin" | "ngo" | "donor"',
            mobileNo: 'string (optional)',
          },
          responseBody: {
            data: {
              user: {
                id: 'string',
                username: 'string',
                email: 'string',
                mobileNo: 'string?',
                role: '"admin" | "ngo" | "donor"',
              },
              token: 'string',
            },
            status: 'number',
          },
          responses: [
            {
              status: HttpStatusCodes.OK,
              description: 'Registration successful',
              data: {
                user: 'UserObject',
                token: 'jwt_token_string',
                status: 200
              }
            },
            {
              status: HttpStatusCodes.BAD_REQUEST,
              description: 'Registration failed',
              data: {
                message: 'User already exists with this email/username/mobile',
                status: 400
              }
            }
          ]
        },
        {
          path: Paths.Auth.Base + Paths.Auth.Login,
          method: 'POST',
          description: 'Login with existing credentials',
          requestBody: {
            username: 'string (email/username/mobile)',
            password: 'string',
          },
          responseBody: {
            data: {
              user: {
                _doc: {
                  id: 'string',
                  username: 'string',
                  email: 'string',
                  mobileNo: 'string?',
                  role: '"admin" | "ngo" | "donor"',
                }
              },
              token: 'string',
            },
            status: 'number',
          },
          responses: [
            {
              status: HttpStatusCodes.OK,
              description: 'Login successful',
              data: {
                user: 'UserObject',
                token: 'jwt_token_string',
                status: 200
              }
            },
            {
              status: HttpStatusCodes.BAD_REQUEST,
              description: 'Login failed',
              data: {
                message: 'Invalid credentials',
                status: 400
              }
            }
          ]
        }
      ],
    },
    {
      title: 'OTP',
      description: 'OTP verification endpoints',
      endpoints: [
        {
          path: Paths.OTP.Base + Paths.OTP.Send,
          method: 'POST',
          description: 'Send OTP to email or mobile',
          requestBody: {
            identifier: 'string (email or mobile)',
            type: '"email" | "mobile"',
          },
          responseBody: {
            data: {
              success: 'boolean',
              message: 'string',
            },
            status: 'number'
          },
          responses: [
            {
              status: HttpStatusCodes.OK,
              description: 'OTP sent successfully',
              data: {
                success: true,
                message: 'OTP sent to your email/mobile',
                status: 200
              }
            },
            {
              status: HttpStatusCodes.BAD_REQUEST,
              description: 'Failed to send OTP',
              data: {
                success: false,
                message: 'Error message',
                status: 400
              }
            }
          ]
        },
        {
          path: Paths.OTP.Base + Paths.OTP.Verify,
          method: 'POST',
          description: 'Verify OTP code',
          requestBody: {
            identifier: 'string (email or mobile)',
            otp: 'string',
          },
          responseBody: {
            data: {
              success: 'boolean',
              message: 'string',
            },
            status: 'number'
          },
          responses: [
            {
              status: HttpStatusCodes.OK,
              description: 'OTP verified successfully',
              data: {
                success: true,
                message: 'OTP verified successfully',
                status: 200
              }
            },
            {
              status: HttpStatusCodes.BAD_REQUEST,
              description: 'OTP verification failed',
              data: {
                success: false,
                message: 'Invalid/Expired OTP',
                status: 400
              }
            }
          ]
        }
      ]
    }
    
  ]
};