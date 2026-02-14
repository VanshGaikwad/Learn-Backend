const express = require('express');

// create server 
// express();
//  create server 
const app = express(); //creation of  server instance 
// req,res  : prog server if req come send this response
app.get("/",(req,res)=>{
    res.send("Hello universe");
})
app.get("/about",(req,res)=>{
    res.send("im about  ");
})


app.listen(3000);// server start with port number 
