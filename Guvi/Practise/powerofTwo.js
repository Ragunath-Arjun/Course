function powerofTwo(n){
    let dummy = [];
    for(i=0;i<=n;i++)
    {
        let res = Math.pow(2,i);
        dummy.push(res);
    }
    let fres = console.log(dummy.join(","));
    return fres;
}

powerofTwo(0)
powerofTwo(1)
powerofTwo(2)