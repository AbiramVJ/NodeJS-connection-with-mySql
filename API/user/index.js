import express from "express";
const Router = express.Router();

//database
import connection from'../../config/connection.js';

/**
 * 
 */

Router.get("/user",async(req,res)=>{
    try{
       
        const Sql = "SELECT * FROM posts";  
         connection.query(Sql,function(err,results){
             //console.log(results);
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

// const sql = "SELECT * FROM posts";
// await connection.execute(sql, function(err,result){
//     if(err) throw err;
//     console.log(result);
// })





export default Router;
