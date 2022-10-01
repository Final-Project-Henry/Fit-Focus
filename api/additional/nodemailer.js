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
 }, 
    mailNewPassword: (email , link) => {
        return {
            from: 'fitfocus43@gmail.com',
            to: email,
            subject: 'Nueva contraseña',
            html: `
            <p>para cambiar tu contraseña rederijete al link de abajo y crea una nueva contraseña</p>
            <b> Este link se vence en 10 minutos. </b>
            <a href=${link}>${link}</a>
    
                <br/>
                <br/>
                <p>Fit Focus te recomienda ejercisios de buena calidad para veneficiar tu memoria  </p>
                <img width=50% src="https://www.entrenamiento.com/wp-content/uploads/2016/06/Ejercicio-mancuerna.jpg"></img>
            `
            ,
        }
}

}
