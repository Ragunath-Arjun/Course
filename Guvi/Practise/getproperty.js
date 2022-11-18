let obj = {
    Mykey:"value"
};

function getProperty(object,keyvalue){
    if(object[keyvalue] === undefined)
    {
        return undefined;
    }
    else
    {
        return object[keyvalue];
    }
}

console.log(getProperty(obj,"Mykey"))
console.log(getProperty(obj,"no"))