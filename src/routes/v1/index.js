const express = require('express');
const router = express.Router();
const {infoController:{info}} = require('../../controllers')
const airplaneRoutes = require('./airplane-routes');

router.use('/airplanes',airplaneRoutes);

router.get('/info',info) 
router.get('/info/new',(req,res)=>{
    return res.json({msg:'router is setup'});
})

module.exports = router;