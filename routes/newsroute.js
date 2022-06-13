const News =require("../model/schemadb");
const newsRouter =Router();
const {Router}=require("express");


newsRouter.post("/new", (req,res)=>{
    const news =new News(req.body);
    news.save((err,succ)=>{
        if(err){
            return res.status(500).send({message:"Posting Error"})
        }
        return res.status(201).send({message:"News Created",news:succ["_doc"]});
    })
})

module.exports =newsRouter

