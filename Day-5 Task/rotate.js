// g.Rotate an array by k times
// Using anonymous function 
console.log("Rotate an array by k times Using anonymous function ");
let a=[1,2,3,4,5,6];
let b=function(a)
{
let s=1;
console.log(a);
while(s<=6)
{
let b=a.pop();
a.unshift(b);
console.log(a);
s++;
}
}
b(a);


// g.Rotate an array by k times
// Using IIFE
console.log("\n Rotate an array by k times Using IIFE");

(function(a)
{
    let s=1;
    console.log(a);
    while(s<=6)
    {
    let b=a.pop();
    a.unshift(b);
    console.log(a);
    s++;
    }
})(a);