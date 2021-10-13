// programs in anonymous function 
// A.Print odd numbers in an array

console.log(" odd numbers in an array using anonymous function");
let a=[4,5,2,44,33,21,49];
let odd=function(a)
{
    for(let i of a)
    {
         if(i%2)
         {
          console.log(i);
         }
     }
}
odd(a);


// programs in  IIFE
// A.Print odd numbers in an array
console.log("\n odd numbers in an array using IIFE");
let y=(function(odd)
 {
    for(let i in odd)
        {
             if(odd[i]%2)
             {
              console.log(odd[i]);
             }
         }  
})(a);



// programs in  Arrow function
// A.Print odd numbers in an array
console.log("\nodd numbers in an array using Arrow function");
console.log(a.filter((x)=>x%2));





