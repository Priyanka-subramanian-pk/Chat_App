const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    userName:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    description:{
        type:String
    }
})
module.exports=userSchema