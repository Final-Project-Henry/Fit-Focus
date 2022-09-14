const { Router } = require('express');
const user = require('../models/User.js')
const router = Router();

router.get('/getexercises', async (req,res) => {
   const {email} = req.user
   const User = await user.findOne({email : email}).select('plan')
   
res.status(200).send(User)
});

module.exports = router