//Promise is an object which stores the result of an asynchorous operations;

// var age=parseInt(prompt("Enter you age"));

// var p1=new Promise((resolve,reject)=>
// {
//     if(age>=18)
//     {
//         resolve("You are eligible for Voting");
//     }
//     else{
//         reject("You are not eligible for Voting");
//     }
// });

// console.log(p1);
// p1.then((data)=>console.log(data)).catch((error)=>console.log(error));


function mul(number){
    return new Promise((resolve,reject)=>setTimeout(()=>{
      resolve(2*number)
    },3000));
    }
    
    function bar(number){
      return new Promise((resolve,reject)=>setTimeout(()=>{
        reject(2*number+"this is rejected state")
      },3000));
      }
    
    mul(12)
    .then((data)=>{
      console.log(data);
      //mul(24);
      return mul(data);
    }).then((data1)=>{
      console.log(data1);
      //bar(48);
      return bar(data1);
    })
    .then((data2)=>console.log(data2))
    .catch((error)=>console.log(error));