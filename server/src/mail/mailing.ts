import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { log } from 'console';
dotenv.config();


async function sendMail(email: string, subject: string, text: string) {


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    // console.log(process.env.EMAIL);
    console.log(process.env.PASSWORD);

    const mailoptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text
    };

    await transporter.sendMail(mailoptions);

}

export {
    sendMail,
};
