
const{Schema} =require("mongoose");
const{model} =require("mongoose");


const xSchema=new Schema({
    Title:{
        type:String},
    Description:{
        type:String},  

    Date:String,

    Author:{
        type:String,
        enum:["Mathias Newburn", "Rey Rutty", "Magdaia Shellard", "Kathrine Faichney"]
    },

    Location:{
        type:String,
        enum:["London","New York"]
    },

    tags:{
        type:String,
        enum:["Politics","crime","tech","sports","health"]
    },

    totalviews:Number,

    Catagory:{
        type:String,
        enum:["trending", "top", "new"]
    }


});

const News =model("new",xSchema);

module.exports =News;



// {
// Title:"chandigadh",
// Description:"hgjfhjfgkgjh"
// Author:"Mathias Newburn",
// Location:"London",
// tags:"Politics",
// totalviews:1,
// Catagory:"trending"
// }