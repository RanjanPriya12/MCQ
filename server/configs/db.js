const mongoose=require('mongoose');

const connectDB=()=>{
    return mongoose.connect(url);
}

module.exports=connectDB;