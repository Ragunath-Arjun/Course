var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload=function(){
var result=JSON.parse(request.response);
    console.log(result);

    // result.forEach((element) => {
    //     console.log(element.name,element.capital,element.flag);
    // });

    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].currencies);

        if(result.currencies.name=="United States Dollar")
        {
            console.log("true");
        }
    // }
    // var reg=result.filter((ele)=>ele.currencies[i].name);
    // console.log(reg);
    }
    // var res1=result.map((ele)=>ele.currencies);
    // console.log(res1)
    // var total=result.reduce((acc,cv)=>acc+cv.population,0)
    // console.log(total);
}

