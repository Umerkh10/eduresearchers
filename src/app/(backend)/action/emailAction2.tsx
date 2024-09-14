"use server"
import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({

    email: z.string().email().nonempty(),

});

export default async function EmailAction2(state: any, formData: FormData) {
    try {

        const email = formData.get("email") 


        const validatedField = formSchema.safeParse({email})

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

                    <li><b>Email Address:</b> ${validatedField.data.email}</li>

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









