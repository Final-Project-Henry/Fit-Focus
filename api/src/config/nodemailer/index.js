/* eslint-env node */
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_MAIL,
    pass: process.env.NODEMAILER_PASS,
  },
})

const options = (email, subject, template) => ({
  from: process.env.NODEMAILER_MAIL,
  to: email,
  subject,
  html: template,
})

const subjects = {
  register: '¡Bienvenido a Fit Focus!',
  confirm: '¡Confirma tu correo!',
  delete: '¡Regresa cuando quieras!',
  newPass: 'Restablece tu contraseña',
  answered: 'Respuesta de la administración de Fit Focus',
}

const templates = (link, response) => ({
  register: `
  <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664736356/baner_register_ytyrlb.png"></img>
  `,
  confirm: `
  <span>Aun no implementado :(</span>
  `,
  delete: `
  <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664737396/baner_delete_nabiqw.png" />
  `,
  newPass: `
  <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664738286/baner_password_gcnbhz.png"></img>
  <br/>
  <a href=${link} ><b>LINK</b></a>
  `,
  answered: `
  <h1>Estimado <b>${response?.name}</b></h1>
  <p> Es un placer poder solucionar algun inconveniente surgido en la app, o despejar alguna duda con respecto a la misma.</p>
  <br/>
  <p><b>La pregunta que realizo:</b></p>
  <p>${response?.question}</p>
  <br/>
  <p>Respuesta del admin:</p>
  <p>${response?.answer}</p>

    <br/>
    <br/>

  <p>Esperamos poder haberlo(a) ayudado con su pregunta</p>
  <p>Despues de respondida su pregunta, es eliminada automaticamente. Sientase libre de hacer otra pregunta si la tuviera</p>
  <a href="${process.env.APP_URL}">Puedes usar este LINK para ir a la app</a>
  <a href="${process.env.APP_URL}/contactanos">Puedes usar este LINK para hacer otra pregunta</a>
     `,
})

module.exports = {
  options,
  subjects,
  templates,
  transporter,
}
