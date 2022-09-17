const { Router } = require('express');
const getGoogleToken = require('../service/userService.js')

const router = Router();

router.get('/', async (req, res) => {
 const {code} = req.query

 const { id_token, access_token } = await getGoogleToken({code});
 const url = 'https://www.googleapis.com/oauth2/v2/userinfo'
 

res.send('Autenticado con Google!')
})

module.exports = router