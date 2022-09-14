const { Router } = require('express');

const router = Router();

router.get('/getexercises', (req,res) => {
console.log(req.user)
console.log(req.user.name)
res.status(200).send('llegaste')
});

module.exports = router