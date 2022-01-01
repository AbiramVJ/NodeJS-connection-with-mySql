import express from 'express';
import path from "path";
const app = express();

//ejs
const __dirname = path.resolve();
app.set('view engine','ejs');



// using the json transfer the data
app.use(express.json());


app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use(express.static('public')); // Serve static files (e.g. CSS files)

//API
import user from './API/user/index.js';

//API
app.use("/",user);

app.use((error,req,res,next)=>{
  //console.log(error);
  return res.json({error:error.message});
})
// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
    
  console.log(`Server is running on port ${PORT}.`);
});