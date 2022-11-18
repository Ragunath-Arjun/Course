let obj = {
    Mykey : "value"
}

function removeProperty(object,_keyval){
    delete object._keyval;
}

console.log(removeProperty(obj,"Mykey"))