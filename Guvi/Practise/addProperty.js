let obj = {};

function addProperty(object,keyvalue)
{
    object[keyvalue] = true
    return object
}


console.log(addProperty(obj,"MyKey"))
console.log(addProperty(obj,"hey"))
// console.log(obj)