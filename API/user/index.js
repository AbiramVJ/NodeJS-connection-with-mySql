import express from "express";

const Router = express.Router();

import path from "path";
const app = express();

//ejs
const __dirname = path.resolve();
app.set("view engine", "ejs");

//database
import db from "../../config/connection.js";

/**
 * METHOD: GET
 * PARAMETER:NONE
 * DESCRIPTION:GET A NEW CONTENT
 */
Router.get("/user", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM posts");
    return res.render("home", { user: results });
    //console.log(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/**
 * METHOD: POST
 * PARAMETER:NONE
 * DESCRIPTION:POST A NEW CONTENT
 */
Router.post("/post", async (req, res) => {
  try {
    const data = [req.body.title, req.body.body, req.body.create_at];
    console.log(data);
    const newContent = await db.query(
      "INSERT INTO posts(title,body,create_at) VALUE(?)",
      [data]
    );
    return res.status(200).json({ user: "successfully added" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * METHOD:GET
 * PARAMETER:ID
 * DESCRIPTION: GETTING THE POST ACCORDING TO THE ID
 *
 */

Router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const sql = `
    SELECT * FROM posts WHERE id = ? 
    `;
    const [result] = await db.query(sql, [id]);
    return res.json({ user: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * METHOD:PUT
 * PARAMETER:ID
 * DESCRIPTION: UPDATE THE DATA ACCORDING TO THE ID
 *
 */

Router.put("/user/:id/edit", async (req, res) => {
  try {
    const sql = `
   UPDATE posts SET title='${req.body.title}',
            body = '${req.body.body}' ,
            create_at = '${req.body.create_at}'
            WHERE id ='${req.params.id}'`;

    const updateData = await db.query(sql);
    return res.status(200).json({ content: "successfully added" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/**
 * METHOD:DELETE
 * PARAMETER:ID
 * DESCRIPTION: DELETE THE DATA ACCORDING TO THE ID
 *
 */

Router.delete("/user/:id/delete",async(req,res)=>{
    try{
        const {id}= req.params;
        const findById = `SELECT * FROM posts WHERE id = ${req.params.id}`
        const delateSql= `DELETE FROM posts WHERE id = ?`;

        const [findRecord] = await db.query(findById);
      
       
        if(findRecord===null){
            return res.status(200).json({delete:"no record found on this id "});
        }else{
            const [record]= await db.query(delateSql,[id]);
            return res.status(200).json({delete:"record delete seccuscesfully",deletedRecord:findRecord});
        }
        

    }catch(error){
        return res.status(500).json({error:error.message});
    }
})
export default Router;
