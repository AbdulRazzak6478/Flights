const express = require('express');
const {ServerConfig:{PORT},Logger} = require('./config');
const apiRoutes =require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);

 
app.listen(PORT,async()=>{
    console.log(`Successfully started the server on PORT ${PORT} `); 
    Logger.info("Successfully started server"," root ", {});

      // bad code alert
      const { Airport , City,Airplane } = require('./models');
    //   const cities = await City.findAll();
    //   console.log(cities);
    //   const bengaluru = await City.findByPk(1);
    //   console.log(bengaluru);
    //   const airport = await Airport.create({name: 'Kempegowda Airport2', code: 'HYD', cityId: 1});
    //   console.log("airport ",airport)

        // internal functions
        
        //   const bengaluru = await City.findByPk(1);
        //   console.log(bengaluru);
      // const dbpairport = await bengaluru.createAirport({name: 'Huballi Airport', code: 'HBL'});
      // console.log(dbpairport);
      // const airportsInBlr = await bengaluru.getAirports();
      // console.log(airportsInBlr);
      // const hbairport = await Airport.findByPk(3);
      // console.log(hbairport);
      // await bengaluru.removeAirports(hbairport);
      // const mumbai = await City.findByPk(2);
      // const sh = mumbai.createAirport({name: 'CSI airport', code: 'MUM'});
      // await City.destroy({
      //     where: {
      //         id: 2
      //     }
      // });
      // const sh = await Airport.findByPk(2);
      // mumbai.removeAirport(sh)
      // const city = await City.findByPk(4);
      // await city.createAirport({name: 'Indore airport', code: 'IND'});
      // await City.destroy({
      //     where: {
      //         id: 4
      //     }
      // });
});
