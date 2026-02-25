const express = require('express');
const noteModel = require('./models/note.model')

const app = express();
app.use(express.json()) //middleware
// note = { title , desc}

/*
POST /notes -> create a note
GET /notes -> get all notes
DELETE /notes/:id -> delete a note
PATCH /notes/:id -> update a note



*/


app.post("/notes",async(req,res)=>{
    const data = req.body // {title , description}
   await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({message:"Note created"})

})

app.get('/notes',async(req,res) =>{
    // find =>[{},{}] or []
    // findOne => {} or null
    const notes = await noteModel.find();
    
    res.status(200).json({
        message:"Notes fetched successfully",
        notes:notes
    })

})

app.delete("/notes/:id",async(req,res) =>{
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"note delete successfull"
    })
})

app.patch("/notes/:id",async(req,res) =>{
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({_id:id }, {description:description})
    res.status(200).json({
        message:"Note updated successfully",
    })
})

module.exports = app