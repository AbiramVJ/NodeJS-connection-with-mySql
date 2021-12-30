import dotenv from "dotenv";
import mysql from 'mysql';

dotenv.config();

// Create a connection to the database
const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Password@123",
  database:"userdb_1"

});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default connection;