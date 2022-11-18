function findMax(array){
    array.sort(function(a,b){return b-a});
    return array[0];
}
let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = findMax(ar);
console.log("Max:",max);