const { Router } = require('express')
const User = require('../models/User.js')

const router = Router()

router.post('/admin', async (req, res) => {
  try {
    const { _id } = req.body
    const user = await User.findOne({ _id: _id })
    await User.updateOne(
      { _id: _id },
      {
        admin: user.admin ? false : true,
      },
    )
    return res.status(200).send('Change admin property')
  } catch (err) {
    return res.status(404).send('error: ', err)
  }
})

module.exports = router
