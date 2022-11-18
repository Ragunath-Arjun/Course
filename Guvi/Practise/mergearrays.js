function mergeArrays(arr1,arr2){
    let result = [];
    for(let el of arr1)
    {
        result.push(el);
    }
    for(let el of arr2)
    {
        result.push(el);
    }
    return result;
}

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr = mergeArrays(arr1, arr2);
console.log(arr);