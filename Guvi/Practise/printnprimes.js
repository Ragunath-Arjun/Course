function isPrime(num){
    if (num === 2)
    {
        return true;
    }
    else if(num>1)
    {
        for(i=2;i<num;i++)
        {
            if(num%i === 0)
            {
                var prime = false; 
                return prime;
            }
        }
        if(prime === undefined)
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}

function printPrimes(nPrimes)
{
    var n = 0;
    var i = 2;
 
    while(n < nPrimes)
    {
        if (isPrime(i))
        {
            console.log(i);
            n++;
        } 
        i++;
    }
}

printPrimes(100)