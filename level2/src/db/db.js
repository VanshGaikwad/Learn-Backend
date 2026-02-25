const mongoose = require("mongoose")


async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:d6o24epqPQ2xdXDD@complete-backend.w8tvuvb.mongodb.net/halley")
    console.log("connected to DB");
}

// connectDB();


module.exports = connectDB