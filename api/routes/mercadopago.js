const {Router} = require('express');
const router = Router();
const PaymentController = require('../Controllers/PaymentController.js');
const PaymentService = require('../service/PaymentsService.js')
const PaymentInstance = new PaymentController(new PaymentService())

router.get('/payment' , async (req, res) => {
  PaymentInstance.getPaymentLink(req, res)
})

module.exports = router