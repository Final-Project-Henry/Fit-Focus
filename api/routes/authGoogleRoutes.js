const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
res.send('Autenticado con Google!')
})

module.exports = router