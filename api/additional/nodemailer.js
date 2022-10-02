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
            // html: `
            // <b>¡Su usuario ha sido creado con éxito! </b>
            // <p> Nos alegra que estes aqui. Fit Focus tiene una comunidad enorme y apasionada, lista para ver y celebrar todas las cosas que te gustan, y hemos apartado un asiento solo para ti. </p> 
            // <b> Al crear una cuenta, aceptas los Términos y la Política de privacidad de Fit Focus.   </b>

            //   <br/>
            //   <br/>

            //     <img width=50% src="https://cdn.cienradios.com/wp-content/uploads/sites/3/2020/04/entrenar.jpg"></img>
            // `
            html: `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664736356/baner_register_ytyrlb.png"></img>
            `,

        }
    },
    mailDelete: (email) => {
        return {
            from: 'fitfocus43@gmail.com',
            to: email,
            subject: '¡Regresa cuando quieras!',
            html:
                //  `
                // <b>Tu cuenta ha sido desactivada exitosamente. </b>
                // <p> ¡Regrasa cuendo quieras! Te estaremos esperando.</p>
                // <p>Esta desactivación implica que: </p>
                // <p> Tu perfil y todo lo asociado a el desaparecerá de Fit Focus inmediatamente aunque quedará guardado en nuestro servidor por si algún día decides volver a activarla.
                // Para reactivarla, solo tienes que acceder con tu correo electrónico y contraseña de inicio de sesión. Es posible que la reactivación de la cuenta tarde hasta 24 horas.  </p>

                //   <br/>
                //   <br/>

                //     <img width=50% src="https://i0.wp.com/brunoramos.es/wp-content/uploads/2020/05/cuenta-adsense-inhabilitada.png?resize=605%2C320&ssl=1"></img>
                // `
                `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664737396/baner_delete_nabiqw.png" />
            `
            ,
        }
    },
    mailNewPassword: (email, link) => {
        return {
            from: 'fitfocus43@gmail.com',
            to: email,
            subject: 'Nueva contraseña',
            html: 
            // `
            // <p>Opss! ¿Olvidaste tu contraseña? </p>
            // <p> No hay problema, para cambiarla rederijete al siguiente enlace y crea una nueva. </p>
            // <b> Este vence en 10 minutos. </b>
            // <br/>
            // <a href=${link}>${link}</a>
            //     <br/>
            //     <br/>  
            // <img width=50% src="https://img.freepik.com/vector-gratis/ilustracion-concepto-olvide-contrasena_114360-1010.jpg?size=338&ext=jpg"></img>
            // `
            `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664738286/baner_password_gcnbhz.png"></img>
            <br/>
            <a href=${link} ><b>LINK</b></a>
            `
            ,
        }
    }

}
