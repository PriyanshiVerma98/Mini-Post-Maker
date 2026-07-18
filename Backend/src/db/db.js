require('dotenv').config();

const mongoose=require('mongoose');

async function connectDB(){

    await mongoose.connect(process.env.Mongo_URI);

    console.log("connected to database.")
    
}

module.exports=connectDB;