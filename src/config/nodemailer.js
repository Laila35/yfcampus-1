import nodemailer from 'nodemailer'
export const transporter = nodemailer.createTransport({
    service: 'gmail', // Your email service provider
    auth: {
        user: 'yfcampus@gmail.com', // Your email
        pass: 'aelp tkdh pobs dadr'    // Your email password or app-specific password
    }
});

