// Return all the prime numbers in an array using Anonymous Function

console.log("Prime numbers in an array using Anonymous Function");
let a=[2,1,7,34,17,6,8,19];
let prime=function(num)
{
for(let q of num)
{
  var flag=1; 
  if(q<=1)
  {
    console.log(`${q} is not a Prime Number`);
  }
  else if(q>1)
  {
      function s(a)
      {
      if(a<q)
      {
         if(q%a==0)
          {
          flag=0;
          }
          a++;
          return s(a)
      }
      }
   s(2);
  if(flag==0)
   {
     console.log(`${q} is not a prime number`);
   }
   else
   {
    console.log(`${q} is a prime number`);
   }
  }
}
}
prime(a);





// Return all the prime numbers in an array using IIFE
console.log("\nPrime numbers in an array using IIFE");
(function(n)
{
for(let s of n)
{
let flag=1;
if(s<=1)
{
console.log(s,"not a prime number");
}
else if(s>1)
{
for(i=2;i<s;i++)
{
    if(s%i==0)
    {
        flag=0;
        break;
    }
}
if(flag)
{
    console.log(s,"is a prime number");
}
else
{
    console.log(s,"Not a prime number");
}

}
}


})(a);













