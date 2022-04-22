import mongoose from "mongoose";

const BookSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:32,
    },
    img:{
        required:true,
        type:String,
    },
    price:{
        required:true,
        type:Number
    },
    desc:{type:String},
},{timestamps:true})
export default mongoose.model('Books', BookSchema)