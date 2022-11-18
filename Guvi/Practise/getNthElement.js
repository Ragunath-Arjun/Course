function getNthElement(arr,N){
    if(arr.length === 0)
    {
        return undefined;
    }
    else{
        return arr[N];
    }
}

console.log(getNthElement([1,3,5],1))