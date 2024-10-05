"use server";
import nodemailer from "nodemailer";
import fs from "fs";
import * as fsPromises from "fs/promises";
import { join } from "path";
import generateOrderId from "./generateOrderId";
import saveFormDataToJson from "./saveDataToJson";

export const EmailAction = async (formData: FormData) => {
  // **************Extracting variables separately*******************
  const orderId = generateOrderId();
  const topic = formData.get("topic") as string;
  const selectedValue = formData.get("selectedValue");
  const wordCount = formData.get("wordCount") as string;
  const level = formData.get("level") as string;
  const paper = formData.get("paper") as string;
  const quality = formData.get("quality") as string;
  const deadline = formData.get("deadline") as string;
  const subject = formData.get("subject") as string;
  const language = formData.get("language") as string;
  const source = formData.get("source") as string;
  const format = formData.get("format") as string;
  const referencing = formData.get("referencing") as string;
  const pricePerPage = formData.get("pricePerPage") as string;
  const totalPrice = formData.get("totalPrice") as string;
  const file = formData.get("file") as FileList | null;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const country = formData.get("country") as string;
  const email = formData.get("email") as string;
  const notes = formData.get("notes") as string;

  // **************Saving FormData in to Json*******************
  saveFormDataToJson({
    orderId,
    name,
    phone,
    country,
    email,
    notes,
    topic,
    selectedValue,
    wordCount,
    level,
    paper,
    quality,
    deadline,
    subject,
    source,
    format,
    referencing,
    pricePerPage,
    totalPrice,
  });

  // **************Attactment Saving FormData in to Json*******************

  const path = "./Attachments";

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
    console.log("Folder created: Attachments");
  } else {
    console.log("Folder already exists: Attachments");
  }

  // Parse form data
  const filer: any = file;
  console.log("Files received:", filer);

  // TODO: change this logic
  const attachments = [];
  if (filer?.length > 0) {
    for (let i = 0; i < filer.length; i++) {
      const file = filer[i];
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const lastModifiedDate = new Date(file.lastModified);
      const filenameWithDate = `${lastModifiedDate.toISOString()}_${file.name}`;
      const filePath = join(path, filenameWithDate);

      try {
        await fsPromises.writeFile(filePath, buffer);
        console.log(`File saved: ${filePath}`);
        attachments.push({
          filename: `${i + 1}_${file.name}`,
          path: filePath,
        });
      } catch (error) {
        console.error("Error saving file:", error);
      }
    }
  } else {
    console.log("No files to upload.");
  }

  // TODO: change this logic end

  // ************** Redirect user to stripe*******************

  const finalPaymentUnit = Buffer.from("usd").toString("base64");
  const finalTotalAmount = Buffer.from(totalPrice).toString("base64");
  const finalProductName = Buffer.from("Digital Service").toString("base64");
  const orderToken = Buffer.from(orderId).toString("base64");

  const finalUrl = Buffer.from(
    `http://localhost:3000/api/afterPaymentReceived` // for dev environment
    // `https://gogrades.com/api/afterPaymentReceived` // for prod environment
  ).toString("base64");

  const paymentLinkStripe = `https://eduresearchers.com/test-payment/secure-pay-external-2.php?cevpr_havg=${finalPaymentUnit}&cevpr_nzbhag=${finalTotalAmount}&cebqhpg_anzr=${finalProductName}&gbxra_rkgreany=${orderToken}&url=${finalUrl}`;

  // const paymentLinkStripe = `https://mastermindsenterprises.com/stripe-version-2/secure-pay-external-2.php?cevpr_havg=${finalPaymentUnit}&cevpr_nzbhag=${finalTotalAmount}&cebqhpg_anzr=${finalProductName}&gbxra_rkgreany=${orderToken}&url=${finalUrl}`;

  /////////////////// end stirp////////////

  const transporter = nodemailer.createTransport({
    host: process.env.HOST as string,
    port: process.env.PORTS as unknown as number,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // your SMTP username
      pass: process.env.PASSWORD, // your SMTP password
    },
  });

  const clientMailOptions = {
    from: process.env.MAILFROM,
    to: process.env.MAILTO,
    subject: `New Order from ${name}`,
    text: "Thank You For Order",
    html: `
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #333; color: white;">
    <div style="background-image: url('https://muhammadumer.sirv.com/bg-order-temp.webp');background-position: center;background-size: cover; width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #222222; padding: 20px;">
    
        <div style="text-align: center;">
            <div style="display: inline-block; padding: 5px;">
           <img src="https://muhammadumer.sirv.com/edu-logo.png" alt="" style="display: inline-block; vertical-align: middle; height: 50px; width: auto;">
         <p style="display: inline-block; vertical-align: middle; margin: 0; font-size: x-large; color: whitesmoke; font-weight: 700; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
                 Eduresearcher
                </p>
            </div>
        </div>
    
      <p style="font-size: 22px; color: white; line-height: 1.5; text-align: center; font-weight: 700;">
        Thank You For Your Order ${name} <br></p>

        <div style="text-align: center;">
          <a href="#" style="display: inline-block; padding: 12px; background-color: #ff8615; color: whitesmoke; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 25px; margin: 5px 0; text-align: center; vertical-align: middle;">
            Pay Now
          </a>
        </div>
    
      <div style="text-align: center;">
        <h2 style="font-size: 24px; color: beige; font-style: italic;">Personal Details</h2>
      </div>
         <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">OrderId:</div>
          <div style="float: right;">${orderId}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Name:</div>
          <div style="float: right;">${name}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Email:</div>
          <div style="text-decoration: none; float: right;">${email}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Phone:</div>
          <div style="float: right;">${phone}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Country:</div>
          <div style="float: right;">${country}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Notes:</div>
          <div style="float: right;">${notes}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
 
      <div style="text-align: center;">
        <h2 style="font-size: 24px; color: beige; font-style: italic;">Order Summary</h2>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Topic:</div>
          <div style="float: right;">${topic}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">No Of Pages:</div>
          <div style="float: right;">${selectedValue}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Word Count:</div>
          <div style="float: right;">${wordCount}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Academic Level:</div>
          <div style="float: right;">${level}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Type:</div>
          <div style="float: right;">${paper}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Quality:</div>
          <div style="float: right;">${quality}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Deadline:</div>
          <div style="float: right;">${deadline}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Subject:</div>
          <div style="float: right;">${subject}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Language:</div>
          <div style="float: right;">${language}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">No Of Sources:</div>
          <div style="float: right;">${source}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Format:</div>
          <div style="float: right;">${format}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Referencing:</div>
          <div style="float: right;">${referencing}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

        <div style="text-align: center;">
        <h2 style="font-size: 24px; color: beige; font-style: italic;">Order Pricing</h2>
      </div>
    

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Discount:</div>
          <div style="float: right;">45% OFF</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Turnitin Report:</div>
          <div style="float: right; background-color: orange; border: 2px solid #FFA500; border-radius: 15px; width: 100px; padding: 2px; color: white; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">Free</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Price Per Page:</div>
          <div style="float: right;">£${pricePerPage}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Total Price:</div>
          <div style="float: right;">£${totalPrice}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    

      <div style="text-align: center;">
        <p style="font-size: x-large; color: whitesmoke; font-weight: 500;">You Can Contact Our Support Team 24/7.</p>
        <a href="#" style="display: inline-block; padding: 15px 30px; background-color: #15ff00; color: whitesmoke; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px; margin: 10px 0; text-align: center; vertical-align: middle;">
          Whatsapp Now
        </a>
      </div>
    
      <div style="text-align: center; padding-top: 10px; font-size: 12px; color: white;">
        <p>Eduresearcher is a registered trademark of Eduresearcher, Inc. All rights reserved.</p>
      </div>
    
    </div>
    </body>
    `,
  };

  const supportMailOptions = {
    from: process.env.MAILFROM,
    to: process.env.MAILTO, // send to support email
    subject: `New Order from ${name}`,
    text: "New order details",
    html: `
      <body>
        <h2>New Order Summary</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <h3>Order Details</h3>
        <ul>
          <li><strong>Topic:</strong> ${topic}</li>
          <li><strong>Pages:</strong> ${selectedValue}</li>
          <li><strong>Word Count:</strong> ${wordCount}</li>
          <li><strong>Academic Level:</strong> ${level}</li>
          <li><strong>Paper Type:</strong> ${paper}</li>
          <li><strong>Deadline:</strong> ${deadline}</li>
          <li><strong>Total Price:</strong> £${totalPrice}</li>
          <li><strong>Notes:</strong> ${notes}</li>
        </ul>
      </body>
    `,
    attachments,
  };
  try {
    // const info = await transporter.sendMail(supportMailOptions);
    // const info2 = await transporter.sendMail(clientMailOptions);
    // console.log("support Email sent:", info);
    // console.log("client Email sent:", info2);
    return { success: paymentLinkStripe };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Error sending order" };
  }
};



