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
            html: "<b> ¡Su usuario ha sido creado con éxito! Nos alegra que te hayas unido a esta gran familia para empezar a cambiar tu vida, disfruta la app y sus beneficios </b>",
        }
    },
    mailDelete: (email) => {
        return {
            from: 'fitfocus43@gmail.com',
            to: email,
            subject: '¡Regresa cuando quieras!',
            html: "<b> ¡Su usuario ha sido eliminado con éxito! Regresa cuando quieras para volver a disfrutar la app y sus beneficios </b>",
        }
 }

}
