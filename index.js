import express from 'express';
const app = express();
//import cors from 'cors';

//import mysql from 'mysql';

// using the json transfer the data
app.use(express.json());


//API
import user from './API/user/index.js';

//API
app.use("/",user);
 

// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
    
  console.log(`Server is running on port ${PORT}.`);
});