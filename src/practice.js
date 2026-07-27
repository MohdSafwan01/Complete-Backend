//server ko create karna
const express = require("express")
//app create
const app = express()

//middleware
app.use(express.json());

//adding days into an array
const days = [];

day ={
    title: 'Monday',
    description: 'today is day 1'
}
//Post
app.post("/days",(req,res)=>{
    days.push(req.body);
    res.status(201).json({
        message : "day created sucessfully",
    });
});

//Get
app.get("/days",(req,res)=>{
    res.status(200).json({
        message:"day fetched sucessfully",
        days: days

    });
});

//DELETE
app.delete("/days/:index",(req,res)=>{
    const index=req.params.index
    delete days [ index ]

res.status(200).json({
    message: "note deleted sucessfully"
  })
});
module.exports = app;




