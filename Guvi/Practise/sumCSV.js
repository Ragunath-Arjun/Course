function sumCSV(str){
    let result=0;
    let num = str.split(",").map(Number);
    for(i=0;i<num.length;i++)
    {
        result += num[i];
    }
    return result;
}

console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9')); 