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
    text: 'Thank You For Order',
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
        Thank You For Your Order ${orderDetails.contactDetails.name} <br></p>
    
      <div style="text-align: center;">
        <h2 style="font-size: 24px; color: beige; font-style: italic;">Personal Details</h2>
      </div>
    

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Name:</div>
          <div style="float: right;">${orderDetails.contactDetails.name}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Email:</div>
          <div style="text-decoration:none; float: right;">${orderDetails.contactDetails.email}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Phone:</div>
          <div style="float: right;">${orderDetails.contactDetails.phone}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Country:</div>
          <div style="float: right;">${orderDetails.contactDetails.country}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Notes:</div>
          <div style="float: right;">${orderDetails.contactDetails.notes}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <!-- Order Summary Section -->
      <div style="text-align: center;">
        <h2 style="font-size: 24px; color: beige; font-style: italic;">Order Summary</h2>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Topic:</div>
          <div style="float: right;">${orderDetails.topic}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">No Of Pages:</div>
          <div style="float: right;">${orderDetails.selectedValue}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    
      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Word Count:</div>
          <div style="float: right;">${orderDetails.wordCount}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Academic Level:</div>
          <div style="float: right;">${orderDetails.level}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Type:</div>
          <div style="float: right;">${orderDetails.paper}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Quality:</div>
          <div style="float: right;">${orderDetails.quality}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Deadline:</div>
          <div style="float: right;">${orderDetails.deadline}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Subject:</div>
          <div style="float: right;">${orderDetails.subject}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Language:</div>
          <div style="float: right;">${orderDetails.language}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">No Of Sources:</div>
          <div style="float: right;">${orderDetails.source}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Paper Format:</div>
          <div style="float: right;">${orderDetails.format}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Referencing:</div>
          <div style="float: right;">${orderDetails.referencing}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Price Per Page:</div>
          <div style="float: right;">£${orderDetails.pricePerPage}</div>
        </div>
        <div style="clear: both;"></div>
      </div>

      <div style="text-align: center;">
        <div style="display: inline-block; width: 100%; padding: 5px; font-size: large; font-weight: 500; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="float: left;">Total Price:</div>
          <div style="float: right;">£${orderDetails.totalPrice}</div>
        </div>
        <div style="clear: both;"></div>
      </div>
    

      <div style="text-align: center;">
        <p style="font-size: x-large; color: whitesmoke; font-weight: 500;">You Can Contact Our Support Team 24/7.</p>
        <a href="#" style="display: inline-block; padding: 15px 30px; background-color: #2ea710; color: whitesmoke; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 5px; margin: 10px 0; text-align: center;">
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

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, info };
  } catch (error) {
    return { success: false, error: "error sending order" };
  }
};


