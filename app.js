const express=require("express");
const https = require('node:https');
const app =express();




app.get("/".function(req,res){
    const link ="https://api.openweathermap.org/data/2.5/weather?q=Pekanbaru&appid=961eeb7c6ea16cbbae322c0770b83e3b&units=metric"
    https.get(urls,function(response){

    })


    
}
)









app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
