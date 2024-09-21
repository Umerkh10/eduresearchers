"use server"
import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({
    name: z.string().min(3).max(15),
    email: z.string().email().nonempty(),
    phone: z.string().min(9).max(15)
});

export default async function EmailAction(name:string,email:string,phone:string) {
    try {


        const validatedField = formSchema.safeParse({ name, email, phone })

        if (validatedField.error) {
            return {info: validatedField.error.flatten().fieldErrors}
        } else if (validatedField.success) {
            const transporter = nodemailer.createTransport({
                host: process.env.HOST as string,
                port: process.env.PORTS as unknown as number,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.USER, // your SMTP username
                    pass:  process.env.PASSWORD // your SMTP password
                }
            });

            let mailOptions = {
                from: process.env.MAILFROM,
                to: process.env.MAILTO,
                subject: 'Service Form',
                text: 'Hello world?',
                html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <p><b> Details:</b></p>
                <ul>
                    <li><b>Name:</b> ${validatedField.data.name}</li>
                    <li><b>Email Address:</b> ${validatedField.data.email}</li>
                    <li><b>Phone Number:</b> ${validatedField.data.phone}</li>
                </ul>
            </div>
`
            };

            try {
                const info = await transporter.sendMail(mailOptions);
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                return { success: 'Form Submitted Successfully' };
            } catch (error) {
                console.error('Error sending email:', error);
                return { error: 'Failed to send email' };
            }
        }

    } catch (error) {
        return { error: "Something Went Wrong" }
    }

}









