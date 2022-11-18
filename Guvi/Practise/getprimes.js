function isPrime(num){
    if(num === 2)
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


function getPrimes(nprimes,startat)
{
    let n = 0;
    let i = startat+1;

    while(n < nprimes)
    {
        if(isPrime(i))
        {
            console.log(i);
            n++;
        }
        i++;
    }
}
getPrimes(10,100)