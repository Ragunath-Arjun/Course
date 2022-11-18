var button=document.createElement("button");
button.innerHTML="Click Me";
button.addEventListener("click",display);
document.body.append(button);


function display(){
    var ele=document.createElement("span");
    ele.innerHTML="Welcome to guvi ";
    ele.style.fontSize="20px";
    ele.style.color="blue";
    document.body.append(ele);
}