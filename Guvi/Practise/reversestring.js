function reverseString(str){
    let fstr = str.split("");
    let rstr = fstr.reverse();
    return rstr.join("");
}

let s = reverseString("Javascript");
console.log(s);

