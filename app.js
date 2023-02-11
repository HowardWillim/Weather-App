const express=require("express");
const https = require('https');
const bodyParser = require("body-parser");
const app =express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){


    const query=req.body.CityName;
    const appid="961eeb7c6ea16cbbae322c0770b83e3b";
    const unit ="metric"


    const urls ="https://api.openweathermap.org/data/2.5/weather?q=Pekanbaru&appid="+ appid+ "&units="+unit;
    https.get(urls,function(response){
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp =weatherData.main.temp;
            const weatherDescription =weatherData.weather[0].description;
            const icon =weatherData.weather[0].icon;
            const imageURl ="http://openweathermap.org/img/wn/"+icon+"@2x.png";

            res.write("<p>The weather is currently " + weatherDescription +"</p>")
            res.write("<h1>The temperature in "+query+" is "+ temp +" degree celcius. </h1> ");
            res.write("<img src="+imageURl+">");
            res.send();
        })

    })


    
}
)







app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
