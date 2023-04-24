import nodemailer from "nodemailer";

class MailService {
  transporter: any;

  constructor() {
    this.transporter = nodemailer.createTransport(<any>{
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: "Account activation on" + process.env.API_URL,
      text: "",
      html: `
      <div>
      <h1>To activate follow the link</h1>
      <a href=${link}>${link}</a>
      </div>
      `,
    });
  }
}

export const mailService = new MailService();
