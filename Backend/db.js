const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/"
const connectToMongo =  ()=>{
    mongoose.connect(URI).then(()=>
        console.log("Connected to Mongo Successfully")
).catch((e)=>console.log(e.message))
}
module.exports =connectToMongo;