require('dotenv').config()
const mongoose = require('mongoose');
let ConnectionString = "mongodb+srv://lecianclaymoa2121_db_user:Whatsup06@cluster003.0ux9yqf.mongodb.net/midterm?retryWrites=true&w=majority"

module.exports = function(){

    mongoose.connect(ConnectionString);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log('====> Connected to MongoDB.');
    });

    return mongodb;
};