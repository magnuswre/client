
fetch(`https://petrescuenow.herokuapp.com/users`)
.then((res)=>console.log(res))  





/*


const http = require("http");
const host = 'localhost';
const port = 8000;
const express = require("express");
const res = require("express/lib/response"); 
const app = express();
const bodyParser = require("body-parser") //importar funktioner, hjälper backend vilken typ av jsondata som kommer från frontend 34:10 i Backend 3 MIMO LIVE   
app.use(bodyParser.json()) //make it understand what json "do"


app.get("/", (req, res)=>{ // endpoint med bara forward slash / är hemsidan. 
    res.status(200).json({message:"Welcome to the server"})
})


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
    
})

*/