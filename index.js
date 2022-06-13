const express =require("express");
// const {Scheme}=require("mongoose");
// const {model}=require("mongoose");
const connection =require("./data")
const nRouter =require("./routes/nroute")


const app=express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/news",nRouter)

const PORT= process.env.PORT || 8080

app.listen(PORT,async()=>{
    await connection
    console.log("connected to db ")
    console.log("Port running on http://localhost:8080")
    
})