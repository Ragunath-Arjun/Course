// function createlabels(tagname,attrname,attrvalue,content){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.innerHTML=content;
//     return ele;
//     }
//     //it is returning an HTML element
//     //<label for="email">Mail</label>
    
//     function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//         var ele=document.createElement(tagname);
//         ele.setAttribute(attrname,attrvalue);
//         ele.setAttribute(attrname1,attrvalue1);
//         return ele;
//     }
//     function createlinebreak(tagname){
//     var ele=document.createElement(tagname);
//     return ele;
//     }
// var label=createlabels("label","for","fname","FirstName");
// var br1=createlinebreak("br");
// var input=createinput("input","type","text","id","fname");
// var br2=createlinebreak("br");

// var label1=createlabels("label","for","mname","MiddleName");
// var br3=createlinebreak("br");
// var input1=createinput("input","type","text","id","mname");
// var br4=createlinebreak("br");

// var label2=createlabels("label","for","lname","LastName");
// var br5=createlinebreak("br");
// var input2=createinput("input","type","text","id","lname");
// var br6=createlinebreak("br");

// var label3=createlabels("label","for","phnum","PhoneNumber");
// var br7=createlinebreak("br");
// var input3=createinput("input","type","text","id","phnum");
// var br8=createlinebreak("br");

// document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,label3,br7,input3,br8);

function login(){
    var res=document.getElementById("fname").value;
    var res1=document.getElementById("mname").value;
    var res2=document.getElementById("lname").value;
    var res3=document.getElementById("mail").value;
    var res4=document.getElementById("pass").value;

    console.log(res,res1,res2,res3,res4);
}