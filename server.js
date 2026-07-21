// first require express from express package
const express = require('express')

// just call the express function
const app = express()

//creating a request and sending hello world in response
app.get("/", (req,res) => {
    res.send("Hello World")
})

//creating a request and sending 'about page' in /about 
app.get("/about",(req,res)=> {
    res.send("About page")
})

//creating a req and respone for 'FAQ' with /faq
app.get("/faq",(req,res)=>{
    res.send("Faq page")
})

//to start the server in port 3000 
app.listen(3000)