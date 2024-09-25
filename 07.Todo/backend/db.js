const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/todos").then(()=> console.log("Connected to mongo db")).catch((err)=>console.log("Not connected to the server",err))

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model("todos",todoSchema);

module.exports={
    todo
}