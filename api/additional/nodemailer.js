const nodemailer = require('nodemailer')
require('dotenv').config()

const { SECRET, NODEMAILER } = process.env

module.exports = {
  transporter: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fitfocus43@gmail.com',
      pass: NODEMAILER,
    },
  }),
  mailDetails: email => {
    return {
      from: 'fitfocus43@gmail.com',
      to: email,
      subject: '¡Bienvenido a Fit Focus!',
      html: `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664736356/baner_register_ytyrlb.png"></img>
            `,
    }
  },
  mailDelete: email => {
    return {
      from: 'fitfocus43@gmail.com',
      to: email,
      subject: '¡Regresa cuando quieras!',
      html: `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664737396/baner_delete_nabiqw.png" />
            `,
    }
  },
  mailNewPassword: (email, link) => {
    return {
      from: 'fitfocus43@gmail.com',
      to: email,
      subject: 'Nueva contraseña',
      html: `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664738286/baner_password_gcnbhz.png"></img>
            <br/>
            <a href=${link} ><b>LINK</b></a>
            `,
    }
  },
  mailResponse: (email, name, response, comment) => {
    return {
      from: 'fitfocus43@gmail.com',
      to: email,
      subject: 'Respuesta del administrador de Fit Focus',
      html: `
                <h1>Estimado <b>${name}</b></h1>
                <p> Es un placer poder solucionar algun inconveniente surgido en la app, o despejar alguna duda con respecto a la misma.</p>
                <br/>
                <p><b>La pregunta que realizo:</b></p>
                <p>${comment}</p>
                <br/>
                <p>Respuesta del admin:</p>
                <p>${response}</p>

                  <br/>
                  <br/>

                <p>Esperamos poder haberlo(a) ayudado con su pregunta</p>
                <p>Despues de respondida su pregunta, es eliminada automaticamente. Sientase libre de hacer otra pregunta si la tuviera</p>
                <a href="${process.env.APP_URL}">Puedes usar este LINK para ir a la app</a>
                <a href="${process.env.APP_URL}/contactanos">Puedes usar este LINK para hacer otra pregunta</a>
                   `,
    }
  },
}
