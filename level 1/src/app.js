//  create server
const express = require("express");

const app = express();
app.use(express.json()); //middleware

/*

note = {
    title:"my first note",
    description:"this is my first note"
}


*/

const notes = []
// title and description
// POST /notes
// from  frontend user input title and description
// #POST
app.post("/notes",(req,res)=>{
    notes.push(req.body); //push data to notes array
    // console.log(req.body)
    res.status(201).json(
        {
        message:"note created successfuly"
    }
    )
});

// #GET
// sending data from server by fetching data from server adn send to frontend
// for fetching notes from server
app.get("/notes",(req,res)=>{
    res.status(201).json({
        message:"notes fetch sucessfully",
        notes:notes
    })
})


// #DELETE
// deleting note from server delete -->   /notes/99
app.delete("/notes/:index",(req,res)=>{
    // saving index from uri
    const index = req.params.index 
    delete notes[index]
    res.status(200).json({
        message:"note delete successfully"
    })
})


// #PATCH
app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index;
    const description = req.body.description;
    notes[index].description = description;
    res.status(200).json({
        message:"note updated successfully"
    })
})
module.exports = app; // export
