import express from "express";

const Router = express.Router();

//database
import connection from'../../config/connection.js';

// Router.get("/user",(req,res)=>{
//     const Sql = "SELECT * FROM user";
//     connection.query(Sql, function(err,results){
//         if(err) {
//             res.status(404).json({error:err.message});
//         }
//       //   res.send(results);
//       res.status(200).json({user:results});
//     });

// });

Router.get("/user",async(req,res)=>{
    try{
        console.log("hi");
        const Sql = "SELECT * FROM user";  
         connection.query(Sql,function(err,results){
             console.log(results);
            if(err)
             {
                res.status(404).json({error:err.message});
             }
                 res.status(200).json({user:results});
        });          
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})


export default Router;
