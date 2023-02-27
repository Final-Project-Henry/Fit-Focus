const { Router } = require('express')
// const getGoogleToken = require('../service/userService.js');
const jwt = require('jsonwebtoken')
const user = require('../models/User.js')
const bcrypt = require('bcrypt')
const mailSettings = require('../additional/nodemailer')

require('dotenv').config()

const { SECRET } = process.env

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { code } = req.body
    const data = jwt.decode(code)
    const transporter = mailSettings.transporter
    const mailDetails = mailSettings.mailDetails(data.email)

    let oldUser = await user.findOne({ email: data.email })
    if (oldUser?.status === 'desactivated') return res.status(401).send('User google desactivated')

    if (!oldUser) {
      const hashPassword = await bcrypt.hash(data.sub, 10)
      oldUser = await user.create({ email: data.email, name: data.name, avatar: data.picture, password: hashPassword })
      transporter.sendMail(mailDetails, (error, info) => {
        if (error) console.log('error: ', error)
        else console.log('mensaje enviado con exito')
      })
    }
    const token = jwt.sign(
      { email: oldUser.email, name: oldUser.name, id: oldUser._id, avatar: oldUser.avatar },
      '' + SECRET,
    )

    res.status(200).send(token)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router
