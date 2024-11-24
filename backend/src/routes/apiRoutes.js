const express = require('express');
const router = express.Router();
const {getData}=require('../controllers/apiController')

//Define the route for fetching data
router.get('/',getData)

module.exports=router
