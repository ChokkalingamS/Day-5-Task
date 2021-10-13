// Return all the palindromes in an array using annoymous function
console.log("The palindromes in an array using annoymous function");

let a=[2,151,223,343,477,99,12221];

let palindrome=function(s)
{
for(let q of a)
{   
    let z=(q+"");
    let b=z.split("");
    
    let t="";
    for(let i=(b.length-1);i>=0;i--)
    {
        t=t+b[i];
        
    }
    
    if(t==z)
    {
        console.log(`${z} is a palindrome number`);
    }
    else
    {
        console.log(`${z} is not a palindrome number`);
    }
 
}

}
palindrome(a);





//  Return all the palindromes in an array using IIFE
console.log("\nThe palindromes in an array using IIFE");
(function(z)
{
    for(let q of a)
    {   
        let z=(q+"");
        let b=z.split("");
        
        let t="";
        for(let i=(b.length-1);i>=0;i--)
        {
            t=t+b[i];
            
        }
        
        if(t==z)
        {
            console.log(`${z} is a palindrome number`);
        }
        else
        {
            console.log(`${z} is not a palindrome number`);
        }
     
    }
    
})(a);





