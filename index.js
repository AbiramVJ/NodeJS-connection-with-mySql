import express from 'express';
const app = express();
import cors from 'cors';

import mysql from 'mysql';

// using the json
app.use(express.json());

//database connection
import connection from'./config/connection.js'



app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });

  app.get("/user",(req,res)=>{
      const Sql = "SELECT * FROM user";
      connection.query(Sql, function(err,results){
          if(err) {
              res.status(404).json({error:err.message});
          }
        //   res.send(results);
        res.status(200).json({user:results});
      });


    
  });


// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
    
  console.log(`Server is running on port ${PORT}.`);
});