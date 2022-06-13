const News =require("../model/model");
const {Router}=require("express");
const nRouter =Router();


nRouter.post("/new", (req,res)=>{
    const news =new News(req.body);
    news.save((err,succ)=>{
        if(err){
            return res.status(500).send({message:"Posting Error"})
        }
        return res.status(201).send({message:"News Created",news:succ["_doc"]});
    })
})

module.exports =nRouter

