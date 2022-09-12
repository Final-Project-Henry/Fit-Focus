const { Router } = require('express');
const bcrypt = require('bcrypt');

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const {name, email ,password} = req.body;

    const oldUser = await User.findOne({email : email});
    if(oldUser) return res.status(409).send('User already exists');

    const hashPassword = bcrypt.hash(password, 10);
    const User = await User.create({name,email,hashPassword})

    res.status(201).send(User);
  } catch (error) {
    res.status(500).send(error.message)
  }
    
});

module.exports = router