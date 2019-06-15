const nodemailer = require('nodemailer')
const { promisify } = require('es6-promisify')

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
});

exports.send = async (options) => {
  const mailOptions = {
    from: 'Anton Emery <noreply@chordapp.com>',
    to: options.user.email,
    subject: options.subject,
    html: 'Filled in later',
    text: 'Filled in later'
  };

  const sendMail = promisify(transport.sendMail.bind(transport));
  return sendMail(mailOptions)
}