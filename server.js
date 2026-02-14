const express = require('express');

// create server 
// express();
// proper create server 
const app = express();
// req,res  : prog server if req come send this response
app.get("/",(req,res)=>{
    res.send("Hello universe");
})

// server start
app.listen(3000);
