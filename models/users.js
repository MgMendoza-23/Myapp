import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    nomusuario: String,
    apellidos:String,
    email:{
        type: String,
        unique:true
    },
    password: String,
    role:String,
    active:Boolean,
    avatar:String
});
const User = mongoose.model("User", userSchema);
export { User as default };
