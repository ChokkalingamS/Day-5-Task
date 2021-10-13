// G.Remove duplicates from an array using anonymous function

console.log("Remove duplicates from an array using anonymous function");
let s=[1,2,3,2,5,2,4];
let duplicates=function(s)
{
let repeat={};
for(let i in s)
{
    let v=s[i];
    if(repeat[v])
    {
        repeat[v]+=1;
    }
    else 
    {
        repeat[v]=1;
        
    }
}

for(let i in repeat)
{
    if(repeat[i]>1)
    {
        
     delete repeat[i];
    }
}
let t="";
for(let i in repeat)
{
t=t+i+" ";
}
t=t.trim(" ");
t=t.split(" ").map(Number);
console.log(t);
}
duplicates(s);



//G.Remove duplicates from an array using IIFE

console.log("Remove duplicates from an array using IIFE");
(function(s)
{
    let repeat={};
    for(let i in s)
    {
        let v=s[i];
        if(repeat[v])
        {
            repeat[v]+=1;
            // console.log(`${v}:${repeat[v]}`);
        }
        else 
        {
            repeat[v]=1;
            // console.log(`${v}:${repeat[v]}`);
        }
    }
    for(let i in repeat)
    {
        if(repeat[i]>1)
        {    
         delete repeat[i];
        }
    }
    let t="";
    for(let i in repeat)
    {
    t=t+i+" ";
    }
    t=t.trim(" ");
    t=t.split(" ").map(Number);
    console.log(t);
    
})(s);

















