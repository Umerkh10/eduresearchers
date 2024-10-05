import { NextRequest, NextResponse } from "next/server";
import path from "path";
import * as fsPromises from "fs/promises";
import fs from "fs";

export async function GET(req: NextRequest, res: NextResponse) {


  //**********Read Search params and set the value to variable  ********* */
  const searchParams = req.nextUrl.searchParams;
  const afterPaymentToken = searchParams.get("after_payment_token") as string;
  const paymentStatus = searchParams.get("xxxpayment_status") as string;
  const OrderId = searchParams.get("payment_id") as string;

  //**********Reading Json File based on afterPaymentToken and get the Data********* */
  const filePath = path.join(
    process.cwd(),
    "order",
    `${afterPaymentToken}.json`
  );
  const fileData = await fsPromises.readFile(filePath, "utf8");
  const orderData = JSON.parse(fileData);

  //**********Sending  Email to support ********* */


  

  //**********Sending  Email to client **********/

  //**********Delete the json **********//

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting the file:", err);
    } else {
      console.log("File deleted successfully");
    }
  });

  //**********Delete the json **********//
  return NextResponse.redirect("http://localhost:3000/thank_you_order");
}
