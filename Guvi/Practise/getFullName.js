function getFullName(firstname,lastname){
    if(firstname === undefined)
    {
        fullname = lastname;
    }
    else if(lastname === undefined)
    {
        fullname = firstname;
    }
    else if(lastname === "" && firstname === "")
    {
        fullname = '';
    }
    else{
        fullname = firstname + ' ' + lastname;
    }
    
    console.log("\"%s\"",fullname);
}

getFullName("GUVI","GEEK")
getFullName("GUVI", )
getFullName(undefined,"GEEK")
getFullName("","")