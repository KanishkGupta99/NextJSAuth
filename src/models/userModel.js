import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required:[true,"Please provide a username"],
        unique:[true,"Username has to be unique"],
    },
    email:{
        type: String,
        required:[true,"Please provide a email"],
        unique:[true,"Email has to be unique"],
    },
    password:{
        type: String,
        required:[true,"Please provide a password"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    token: String
})

const User=mongoose.models.users || mongoose.model("users",userSchema)

export default User