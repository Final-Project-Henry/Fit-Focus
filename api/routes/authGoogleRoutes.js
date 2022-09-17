const { Router } = require('express');
const getGoogleToken = require('../service/userService.js');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const user = require('../models/User.js')

require('dotenv').config();

const {SECRET} = process.env

const router = Router();

router.get('/', async (req, res) => {
    try {
        const {code} = req.query
       
        const { id_token, access_token } = await getGoogleToken({code});
        const url = 'https://www.googleapis.com/oauth2/v2/userinfo'
        
        const {data} = await axios.get(url,{
           headers : {
               Authorization : `Bearer ${access_token}`
           }
        })
         await user.create({email :data.email, name : data.name})
         const token = jwt.sign({email : data.email, name : data.name, id : data.id}, "" + SECRET)
       res.status(200).send(token)
    } catch (error) {
       console.log(error.message) 
    }
})

module.exports = router