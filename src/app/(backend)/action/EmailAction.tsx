"use server"
import nodemailer from "nodemailer";

interface EmailData {
  topic: string;
  selectedValue: number;
  wordCount: number;
  level: string;
  paper: string;
  quality: string;
  deadline: string;
  subject: string;
  language: string;
  source: number;
  format: string;
  referencing: string;
  pricePerPage: number;
  totalPrice: number;
  contactDetails: {
    name: string;
    email: string;
    phone: string;
    country: string;
    notes: string;
  };
}

export const EmailAction = async (orderDetails: EmailData) => {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST as string,
    port: process.env.PORTS as unknown as number,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.USER, // your SMTP username
        pass: process.env.PASSWORD // your SMTP password
    }
  });

  const mailOptions = {
    from: process.env.MAILFROM,
    to: process.env.MAILTO,
    subject: `New Order from ${orderDetails.contactDetails.name}`,
    text: `
      Order Summary:
      ---------------
      Topic: ${orderDetails.topic}
      Pages: ${orderDetails.selectedValue}
      Word Count: ${orderDetails.wordCount}
      Level: ${orderDetails.level}
      Paper Type: ${orderDetails.paper}
      Quality: ${orderDetails.quality}
      Deadline: ${orderDetails.deadline}
      Subject: ${orderDetails.subject}
      Language: ${orderDetails.language}
      Sources: ${orderDetails.source}
      Format: ${orderDetails.format}
      Referencing: ${orderDetails.referencing}
      Price per Page: ${orderDetails.pricePerPage}
      Total Price: £${orderDetails.totalPrice}

      Contact Details:
      ----------------
      Name: ${orderDetails.contactDetails.name}
      Email: ${orderDetails.contactDetails.email}
      Phone: ${orderDetails.contactDetails.phone}
      Country: ${orderDetails.contactDetails.country}
      Notes: ${orderDetails.contactDetails.notes}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    return { success: false, error: "error sending order" };
  }
};