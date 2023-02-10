const express=require("express");
const https = require('https');
const app =express();




app.get("/",function(req,res){
    const urls ="https://api.openweathermap.org/data/2.5/weather?q=Pekanbaru&appid=961eeb7c6ea16cbbae322c0770b83e3b&units=metric"
    https.get(urls,function(response){
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp =weatherData.main.temp;
            const weatherDescription =weatherData.weather[0].description;
            const icon =weatherData.weather[0].icon;
            const imageURl ="http://openweathermap.org/img/wn/"+icon+"@2x.png";







            res.write("<p>The weather is currently " + weatherDescription +"</p>")
            res.write("<h1>The temperature in Pekanbaru is "+ temp +" degree celcius. </h1> ");
            res.write("<img src="+imageURl+">");
            res.send();
        })

    })


    
}
)









app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
