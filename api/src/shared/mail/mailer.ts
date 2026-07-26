import nodemailer, { Transporter } from 'nodemailer';
import { getEnv } from '../../config/env';

const FROM = 'fitfocus43@gmail.com';

export type MailPayload = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export function createWelcomeMail(email: string): MailPayload {
  return {
    from: FROM,
    to: email,
    subject: '¡Bienvenido a Fit Focus!',
    html: `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664736356/baner_register_ytyrlb.png"></img>
            `,
  };
}

export function createDeleteMail(email: string): MailPayload {
  return {
    from: FROM,
    to: email,
    subject: '¡Regresa cuando quieras!',
    html: `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664737396/baner_delete_nabiqw.png" />
            `,
  };
}

export function createNewPasswordMail(email: string, link: string): MailPayload {
  return {
    from: FROM,
    to: email,
    subject: 'Nueva contraseña',
    html: `
            <img width=80% src="https://res.cloudinary.com/dm0fwscsy/image/upload/v1664738286/baner_password_gcnbhz.png"></img>
            <br/>
            <a href=${link} ><b>LINK</b></a>
            `,
  };
}

export function createResponseMail(
  email: string,
  name: string,
  response: string,
  comment: string,
): MailPayload {
  return {
    from: FROM,
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
                <a href="http://localhost:3000">Puedes usar este LINK para ir a la app</a>
                <a href="http://localhost:3000/contactanos">Puedes usar este LINK para hacer otra pregunta</a>
                   `,
  };
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: FROM,
        pass: getEnv().NODEMAILER,
      },
    });
  }
  return transporter;
}

export type SendMailFn = (payload: MailPayload) => Promise<void>;

export const sendMail: SendMailFn = async (payload) => {
  try {
    await getTransporter().sendMail(payload);
  } catch (error) {
    console.log(error);
  }
};

export function setMailTransporterForTests(custom: Transporter | null): void {
  transporter = custom;
}
