const express = require('express');
const router = express.Router();
const {infoController:{info}} = require('../../controllers')
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

router.use('/airplanes',airplaneRoutes);
router.use('/cities',cityRoutes);

router.get('/info',info) 
router.get('/info/new',(req,res)=>{
    return res.json({msg:'router is setup'});
})

module.exports = router;