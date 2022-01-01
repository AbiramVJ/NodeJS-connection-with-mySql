

import mysql from 'mysql2/promise';

//Create a connection to the database
const connection = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"Password@123",database:"blog-app"

});



export default connection;
