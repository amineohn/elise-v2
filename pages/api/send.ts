import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // send mail to admin with the following data
  const data = {
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text,
  };

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "sendedmailsbros@gmail.com",
      pass: "Brazza33!",
    },
  });
  // send mail with defined transport object
  transporter.sendMail(data, (error, info) => {});
  res.status(200).json({
    message: "success",
    data: data,
  });
}
