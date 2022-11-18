function getOpposite(num){
    if(num === 0)
    {
        console.log(num)
    }
    else if (Number.isInteger(num)){
        console.log(-1*num);
    }
    else{
        console.log(-1)
    }
}

getOpposite(5)
getOpposite("5a")
getOpposite(-5)
getOpposite(-5.5)
getOpposite(0)
