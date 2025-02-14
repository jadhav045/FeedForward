import { sendMail } from "./mailing";


const otps: { [key: string]: string } = {};

const sendOTP = async (email: string) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otps[email] = otp;
    const subject = 'Your OTP for email verification';
    const text = `Your OTP is ${otp}`;
    await sendMail(email, subject, text);
    return "OTP sent successfully";
}

const verifyOTP = async (email: string, otp: string) => {
    if (otp === otps[email]) {
        delete otps[email];
        return "OTP verified successfully";
    } else {
        throw new Error("Invalid OTP");
    }
}

export default{
    sendOTP,
    verifyOTP,
};