function getLastElement(arr){
    if(arr.length === 0)
    {
        return -1;
    }
    else
    {
        return arr[arr.length-1];
    }
}

console.log(getLastElement([1,2,3,4]))