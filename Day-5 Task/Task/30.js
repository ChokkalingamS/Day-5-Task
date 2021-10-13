// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
function power(n)
{
    let s="";
    for(let i=0;i<=n;i++)
    {
      let y=2**i ;
      s=s+y+" ";
    }
    let m= s.trim("").split(" ").map(Number)
    // let m= s.trim(" ")
    return m;
}
console.log(power(0));
console.log(power(1));
console.log(power(2));