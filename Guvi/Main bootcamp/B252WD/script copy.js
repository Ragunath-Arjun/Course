//1. create a xml http request object
var request = new XMLHttpRequest();
//2.open/initiate a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending the connection
request.send(); //Client side
//4. receiving the data(successfully received from server)
// the data received from the server will be of string
namedata = [];
coordinates = [];
request.onload = function(){
    var data = JSON.parse(this.responseText); //Convert JSON to JS Object
    //response -> receiving from server
    // console.log(data);
    for(var i in data)
    {
        // let num = +i + 1;
        namedata.push({name:data[i].name});
        coordinates.push({
            lat:data[i].latlng[0],
            lng:data[i].latlng[1]
        });
        
    }
    // console.log(namedata);
    var surl = "https://api.openweathermap.org/data/2.5/weather?lat="
    var murl = "&lon="
    var eurl = "&appid=b29cf9c168328e4e81d61f25835d5ac4"
    for(var j in namedata)
    {
        var lat = coordinates[j].lat;
        var lng = coordinates[j].lng;
        // if(lat !== undefined && lng !== undefined)
        // {
            var weather = new XMLHttpRequest();
            weather.open('GET',`${surl}${lat}${murl}${lng}${eurl}`,true);
            weather.send();
            let Cname = namedata[j].name;
            weather.onload = function(){
            var data1 = JSON.parse(this.response);
            console.log(Cname +" : "+ data1.main.temp_min + " : " + data1.main.temp_max);
        };
        // }
        
    }
};



