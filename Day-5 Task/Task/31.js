// Find the maximum number in an array of numbers
function num(max)
{
   let m=0;
    for(let n of max)
    {
       if(m<n)
       {
           m=n;
       }
    }
    return m;
}
console.log(num([-5, 10, -3, 12, -9, 5, 90, 0, 1]));