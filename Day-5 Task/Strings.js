// B.Convert all the strings to title caps in a string array
// using anonymous function
console.log("All the strings to title caps in a string array using anonymous function");

let  strings=["apple","ball","cat","dog","elephant"];
let u="";
var z;
let s=function(s)
{
    for(let i of s)
    {
        let a=i.split("");
        for(let b of a)
        {
            let c=b[0].toUpperCase();
             a.shift();
             a.unshift(c);
             z=a.join("");
             u+=z+" ";
             break;
        }
    }
    u=u.trim(" ").split(" ");
    return u;
}
console.log(s(strings));



// B.Convert all the strings to title caps in a string array 
// Using IIFE
console.log("\nAll the strings to title caps in a string array using IIFE");
var r="";
(function(x)
{
    
    for(let i of x)
    {
        let a=i.split("");
        for(let b of a)
        {
            let c=b.toUpperCase();
             a.shift();
             a.unshift(c);
            let g=a.join("");
            r+=g+" ";
            
             break;
        }
    }
    r=r.trim("").split(" ");
return r;
})(strings);
console.log(r);


// C.Convert all the strings to title caps in a string array 
// Using Arrow function
console.log("\n All the strings to title caps in a string array using Arrow function");
let b="";
strings.map((x)=>
{
   
    let a=x.split("")
    for(let i of a)
    {
        let s=i.toUpperCase()
        a.shift()
        a.unshift(s)
        let w=a.join("");
        b+=w+" ";
         break;
    }
   
});
console.log(b.trim("").split(" "));



