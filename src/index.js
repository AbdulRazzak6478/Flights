const express = require('express');
const { ServerConfig : {PORT}, Logger} = require('./config');
const apiRoutes = require('./routes');
const { StatusCodes } = require('http-status-codes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);
// app.use('/flightsService/api',apiRoutes);

app.use('/live',(req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message:" Flight Service API is live",
        error:{},
        data:{}
    })
})


app.listen(PORT,()=>{
    console.log(` Successfully started the server on PORT ${PORT} `); 
    Logger.info(" Successfully started server "," root ", {});
});

