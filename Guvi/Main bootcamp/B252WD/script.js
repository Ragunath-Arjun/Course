//1. create a xml http request object
var request = new XMLHttpRequest();
//2.open/initiate a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending the connection
request.send(); //Client side
//4. receiving the data(successfully received from server)
// the data received from the server will be of string
request.onload = function(){
    var data = JSON.parse(this.response); //Convert JSON to JS Object
    //response -> receiving from server
    console.log(data);
    for(var i in data)
    {
        console.log(data[i].name + " " + data[i].capital + " " +data[i].flag);   
    }
}
