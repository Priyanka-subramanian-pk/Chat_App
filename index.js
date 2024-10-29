const express=require('express')
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("helo all")
})

module.exports=app