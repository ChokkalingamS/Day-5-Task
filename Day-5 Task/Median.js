//f.Return median of two sorted arrays of same size
// Using Anonymous function
console.log("Median of two sorted arrays of same size Using Anonymous function");
let a=[11,2,6,4,5,1,13];
let b=[3,45,8,9,10,12,25];
let median=function()
{
let c=a.concat(b)
c.sort((a,b)=>a-b);
if(c.length%2==0)
{
    var s=c[((c.length)/2)-1];
    var r=c[(((c.length)/2)+1)-1];
     let Median=(r+s)/2;
     console.log(Math.round(Median));
}
else if(c.length%2)

{
    var s=c[((c.length+1)/2)-1];
    console.log(s);
}
}
median();




// f.Return median of two sorted arrays of same size
// Using IIFE
console.log("\nMedian of two sorted arrays of same size Using IIFE");

(function()
{
let d=a.concat(b)
d.sort((a,b)=>a-b);
if(d.length%2==0)
{
    var s=d[((d.length)/2)-1];
    var r=d[(((d.length)/2)+1)-1];
     let Median=(r+s)/2;
     console.log(Math.round(Median));
}
else if(d.length%2)

{
    var s=d[((d.length+1)/2)-1];
    console.log(s);
}
})();



