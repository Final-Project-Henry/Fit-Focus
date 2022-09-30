const {Router} = require('express')
const users = require('../models/User.js')

const router = Router()

router.get('/allusers', async (req, res) => {
  const Users = await users.find();
  res.status(200).json(Users)
});

module.exports = router;