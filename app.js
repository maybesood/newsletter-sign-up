const express= require("express");
const request=require("request");
const bodyParser=require("body-parser");
// const https = require("https");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    console.log(name,email);
})

// const request=https.request(url,options,function(response){
//     if (response.statusCode === 200){
//         res.send("successfully subscribed");
//     }
//     else{
//         res.send("there was an error with signing up");
//     }
// })


app.listen(3000,function(){
    console.log("server set on port 3000");
})

// 0593bec8b3b0013726fae22b999173bc-us21