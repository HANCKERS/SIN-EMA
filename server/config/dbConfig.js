const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
require('dotenv').config();
//console.log('MongoDB URL:', );  // This should print your MongoDB URI

mongoose.connect(process.env.mongo_url);
const connection = mongoose.connection;

connection.on('connected' , ()=>{
    console.log('Mongo DB Connetion Successfull');
})

connection.on('error' , (err)=>{
    console.log('Mongo DB Connetion Failed');
})