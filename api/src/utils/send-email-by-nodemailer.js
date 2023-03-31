const { transporter, options } = require('../config/nodemailer')

const sendEmailByNodemailer = async (email, subject, template) => {
  let response
  const mailOptions = options(email, subject, template)
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      response = error
      console.log('Ocurrio un error al enviar el mail'.red.bold, error)
    } else {
      response = info
      console.log('Email enviado correctamente'.yellow.bold, info)
    }
  })
  return response
}

module.exports = sendEmailByNodemailer
