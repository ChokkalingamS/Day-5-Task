// programs in anonymous function 
// C.Sum of all numbers in an array
console.log("Sum of all numbers in an array using  anonymous function ");
let n=[1,2,3,4,5,6,7,8,9,10];

let s=function(a)
{
    let sum=0;
 for(let i of a)
 {
sum+=i
 }
 return sum;
}
console.log(s(n));



// programs in IIFE
// C.Sum of all numbers in an array
let y=(function(a)
{
    let sum=0;
    for(let i in a)
    {
   sum+=a[i];
    }
    return sum;
})(n);
console.log("\nSum of all numbers in an array using IIFE");
console.log(y);



// programs in Arrow function
// C.Sum of all numbers in an array
console.log("\nSum of all numbers in an array using  Arrow function");
console.log(n.reduce(((a,b)=>a+b),0));



