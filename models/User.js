const mongoose =require("mongoose");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
    
},{timestamps:true})

module.exports=mongoose.model("User",UserSchema);