import jwt from 'jsonwebtoken';

const SECRET_KEY = "your_secret_key"; // Replace with a strong secret key

/**
 * Generate a JWT token
 * @param userId - The user ID to encode in the token
 * @returns A signed JWT token
 */
export function generateToken(userId: string): string {
  return jwt.sign({ id: userId }, SECRET_KEY, {
    expiresIn: "12h", // Token expires in 1 hour
  });
}
