const app=require('./index')
const port =5000
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()


// database connection
const url=process.env.MONGO_URI
  mongoose.connect(url)
  .then(()=>console.log("mongodb connected"))
  .catch((error)=>console.log(error))   
  
  //start the server
  app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
  });
