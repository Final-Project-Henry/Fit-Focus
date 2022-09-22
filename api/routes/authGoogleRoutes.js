const { Router } = require('express');
const getGoogleToken = require('../service/userService.js');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const user = require('../models/User.js')
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')



require('dotenv').config();

const { SECRET, NODEMAILER } = process.env

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { code } = req.body
    const data = jwt.decode(code);
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'fitfocushenry@gmail.com',
        pass: NODEMAILER,
      },

    });

    let mailDetails = {
      from: 'fitfocushenry@gmail.com',
      to: data.email,
      subject: '¡Bienvenido a Fit Focus!',
      html: "<b> ¡Su usuario ha sido creado con éxito! Nos alegra que te hayas unido a esta nueva aventura </b>",
    };
    let oldUser = await user.findOne({ email: data.email });
    if (!oldUser) {
      const hashPassword = await bcrypt.hash(data.sub, 10)
      oldUser = await user.create({ email: data.email, name: data.name, avatar: data.picture, password: hashPassword });
      console.log(data.email)

      transporter.sendMail(mailDetails, (error, info) => {
        if(error)console.log('error: ',error);
        else console.log('mensaje enviado con exito');
      });

    }
    const token = jwt.sign({ email: oldUser.email, name: oldUser.name, id: oldUser._id }, "" + SECRET)

    res.status(200).send(token)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router
