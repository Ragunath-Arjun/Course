//OpenWeathermap.org printing temp

//restcountries.eu

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);

    
        for(var i in data)
        {
            try{
                var name = data[i].name;
                var lang = data[i].latlng;
                if(lang.length === 0) throw new Error("longitude is not found");
                weatherdata(name,...lang);
            }
            catch(e){
                //output statement
                console.log("Invalid coordinates for the country: " + name +" "+e.message);
            }        
        }
    
}

var weatherdata = function(name,lat,long){
    // console.log(name+" "+lat+" "+long);
    var request = new XMLHttpRequest();
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=b29cf9c168328e4e81d61f25835d5ac4&units=metric'
    request.open('GET',url,true);
    request.send();
    request.onload = function(){
        try{
            var res = JSON.parse(this.response);
            console.log(`${name} : ${res.main.temp}`)
        }
        catch(e){
            console.log("Undefined response" + name);
        }
        
    }

}