// Reverse a string
// var s = reverseString("JavaScript");
// console.log(s);
// function reverseString(s)
// {
//    // your code here  
// }



function string(s)
{
    let r;
    let z="";
    let m=s.split("");
    
    for(i=m.length-1;i>=0;i--)
    {
       r=m[i];
       z=z+r;
    }
    console.log(z);
}
(string("javascript"));
