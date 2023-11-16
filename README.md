This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything. 


`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might  want to make separate tests folder)

Lets take a look inside the `src` folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

 - `services` -> contains the business logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

### Setup the project

 - Download this template from github and open it in your favorite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get `migrations` and `seeders` folder along with a `config.json` inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev
 ```


# How to use Flights Routes
Airplane
- `http://localhost:3000/api/v1/airplanes/`
```
  to create a airplane
  /*
    POST : /airplanes
    req-body {modelNumber : 'airbus320', capacity:200}
  */
  {
    modelNumber: req.body.modelNumber,
    capacity: req.body.capacity,
  }


  to get airplanes
  /*
    GEt : /airplanes
    req-body {}
  */


  to get particular airplane
  /*
    GET : /airplanes/:id
    req-body {}
  */


  to delete a airplane
  /*
    DELETE : /airplanes/:id
    req-body {}
  */


  to update airplane
  /*
    PATCH : /airplanes/:id
    req-body {modelNumber : 'airbus320', capacity:200}
  */
  (req.params.id,
    {
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    }
  )

```

Cities
- `http://localhost:3000/api/v1/cities/`
```
  To create city
  /*
    POST : /cities
    req-body {name :"mumbai"}
  */
  {
    name : req.body.name
  }

  To get cities
  /*
    GEt : /cities
    req-body {}
  */

  To get particular city
  /*
    GEt : /cities/:id
    req-body {}
  */
  {
    id:req.params.id
  }
  
  To get DELETE city
  /*
    DELETE : /cities/:id
    req-body {}
  */
  {
    id:req.params.id
  }

  To get Update city
  /*
    PATCH : /cities/:id
    req-body { name :"mumbai"}
  */
  {
    id:req.params.id,
    name : req.body.name
  }
```

Airports
- `http://localhost:3000/api/v1/airports/`
```
  To create airport
  /*
    POST : /airports
    req-body {name : 'IGI', code:'DEL, address:...., cityId : 5}
  */
  body {
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId : req.body.cityId,
    }

  To get airports
  /*
    GEt : /airports
    req-body {}
  */

  To get particular airports
  /*
    GEt : /airports/:id
    req-body {}
  */
  {
    id:req.params.id
  }

  To get DELETE airports
  /*
    DELETE : /airports/:id
    req-body {}
  */
  {
    id:req.params.id
  }

  To get Update airports
  /*
    PATCH : /airports/:id
    req-body {name : 'IGI', code:'DEL, address:...., cityId : 5}
  */
  body 
    (req.params.id,
      {
        name: req.body.name,
        code: req.body.code,
        cityId:req.body.cityId,
        address:req.body.address
      }
    )
```