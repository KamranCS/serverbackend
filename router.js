const express =require('express');
const router=express.Router();
const carController=require('./controllers/carController');
const autoInsuranceController=require('./controllers/autoInsuranceController');
router.get('/', function (req, res) {
    res.send('home page');
  })
router.get('/carMaker',carController.getcarMaker);
router.get('/carModel',carController.getcarModel);
router.get('/carSubModel',carController.getcarsubModel);
router.post('/autoInsurance',autoInsuranceController.quoteSubmission);

module.exports=router;