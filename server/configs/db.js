const mongoose=require('mongoose');
const dotEnv = require("dotenv");

const connectDB=()=>{
    //return mongoose.connect(`mongodb+srv://priyaranjan:priyaranjan@cluster0.pil9f.mongodb.net/booksDB?retryWrites=true&w=majority`)
    return mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
}

module.exports=connectDB;