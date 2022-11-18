var div=document.createElement("div");
div.setAttribute("class","text-center");
{/* <div class="form-group">
<label for="formGroupExampleInput">Example label</label>
<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
</div> */}

var formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

var input1=document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("id","main");
input1.setAttribute("class","form-control");
input1.setAttribute("placeholder","Enter country name");


let button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.classList.add("btn","btn-primary");
button.addEventListener("click",foo)

let active=document.createElement("div");
active.setAttribute("id","active");

let death=document.createElement("div");
death.setAttribute("id","death");

let recover=document.createElement("div");
recover.setAttribute("id","recover");

formgroup.append(input1,button,active,death,recover);
div.append(formgroup);
document.body.append(div);

// async function foo(){

//     let countryname=document.getElementById("main").value;
//     console.log(countryname);

//     let res=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
//     let result=await res.json();
//     console.log(result);

//     let index=result.length-1;
//     console.log(result[index].Active);

//     active.innerHTML=`Total Active cases:${res1[index].Active}`;

// }

async function foo(){
    try {
    let countryname=document.getElementById("main").value;
    console.log(countryname);
    let res=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
    let res1= await res.json();
    console.log(res1);
    //998
    var index=res1.length-1;
    //res1[998].Active
    console.log(res1[index].Active);
    active.innerHTML=`Total Active cases:${res1[index].Active}`;
    death.innerHTML=`Total Death cases:${res1[index].Deaths}`;
    recover.innerHTML=`Total Recovered cases:${res1[index].Recovered}`;

    } catch (error) {
      console.log(error);
    }
}