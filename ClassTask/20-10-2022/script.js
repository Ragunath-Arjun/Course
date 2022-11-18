var container=document.createElement("div");
container.setAttribute("class","container");

var row=document.createElement("div");
row.setAttribute("class","row");

container.append(row);

var res=fetch("https://restcountries.com/v2/all").then((data)=>
    data.json()).then((data1)=>{
        foo(data1);
        var name1=${data1[i].name};
        var latlong=${data1[i].latlng};
    
        weatherdata(name1,...latlong)}).catch((error)=>console.log(error));

function foo(data1){
    for(var i=0; i<data1.length; i++)
    {
        row.innerHTML+=`<div class="col-md-4">
        <div class="card" style="width: 18rem;">
        <h5 class="card1">${data1[i].name}</h5>
        <img src="${data1[i].flag}" class="card-img-top" alt="Flag of respective Country">
        <div class="card-body">
          <h5 class="card-title">Capital:${data1[i].capital}</h5>
          <h5 class="card-title">Region:${data1[i].region}</h5>
          <h5 class="card-title">Countrycode:${data1[i].alpha3Code}</h5>
          <button onclick="weatherdata()" class="btn btn-primary" id="datas">Click for weather</button>
          
        </div>
      </div>
    </div>`

  
        
        document.body.append(container);        
}
}

// weatherdata(name,...latlng)};


// function weatherdata(name1,lat,lng)
// {
// var res=fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=b38b2025f61c6c4f0f4793400e9c49aa")
// .then((data)=>data.json()).then((data1)=>{

// var a=document.getElementById("datas");



// }

// );
// }