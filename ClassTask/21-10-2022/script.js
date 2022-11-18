async function task(){
    let res= await fetch("https://data.covid19india.org/v4/min/data.min.json")
    let result=await res.json();


    console.log(result.TN.total.confirmed);
    console.log(result.TN.total.deceased);
    console.log(result.TN.total.recovered);
    console.log(result.TN.total.tested);

}
task();

// function(result)
// {
//     for(var i=0;i<result.length;i++)
//     {
//         console.log`${result[i].}`
//     }
// }

// async function bar(){
//     let res= await fetch("https://restcountries.com/v2/all");
//     let result=await res.json();
//     console.log(result);
//     }
//     bar();

https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={b474fbd47d942e985a4f3f01227e06d2}