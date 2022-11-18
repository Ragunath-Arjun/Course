function getPositives(array){
    let posarr = [];
    for(i=0;i<array.length;i++)
    {
        if (array[i] > 0)
        {
            posarr.push(array[i])
        }
    }
    return posarr;
}

let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let ar2 = getPositives(arr);
console.log(ar2)
