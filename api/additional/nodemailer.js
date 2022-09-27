const nodemailer = require('nodemailer');
require('dotenv').config();
const { SECRET, NODEMAILER } = process.env

module.exports = {
    transporter: nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'fitfocus43@gmail.com',
                pass: NODEMAILER,
            },
        }),
    mailDetails: (email) => {
        return {
            from: 'fitfocus43@gmail.com',
            to: email,
            subject: '¡Bienvenido a Fit Focus!',
            html: "<b> ¡Su usuario ha sido creado con éxito! Nos alegra que te hayas registrado. Nos alegra que estes aqui. Fit Focus tiene una comunidad enorme y apasionada, lista para ver y celebrar todas las cosas que te gustan, y hemos apartado un asiento solo para ti. Al crear una cuenta, aceptas los Términos de servicio y la Política de privacidad de Fit Focus. </b>",
        }
    },
    mailDelete: (email) => {
        return {
            from: 'fitfocus43@gmail.com',
            to: email,
            subject: '¡Regresa cuando quieras!',
            html: "<b> Su usuario ha sido desactivado temporalmente. sin embargo sientese libre de regresar cuando guste. </b>",
        }
 }

}
