let arr = [-5,10,-3,12,-9,5,90,0,1];

function countPositivessumNegatives(arr){
    let sumneg = 0;
    let sumpos = 0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i] < 0)
        {
            sumneg += arr[i]; 
        }
        else
        {
            sumpos += arr[i];
        }
    }
    return [sumpos,sumneg]
}

console.log(countPositivessumNegatives(arr))