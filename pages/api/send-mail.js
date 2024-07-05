import VercelInviteUserEmail from '@/emails/email'
import { render } from '@react-email/render'
import nodemailer from 'nodemailer'

export default async (req, res) => {
  // const { name, email, phone, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, //ssl
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.PASS,
    },
  })

  const emailHtml = render(VercelInviteUserEmail({ username: 'ilker' }))

  const options = {
    from: `${process.env.MAILUSER}`,
    to: `${process.env.SENDTO}`,
    subject: 'Hello World',
    html: emailHtml,
  }

  await transporter.sendMail(options)

  res.status(200).json({ name: 'John Doe' })
}
