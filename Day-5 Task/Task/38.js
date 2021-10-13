// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
// console.log(getPrimes(10, 100));
// function getPrimes(nPrimes, startAt)
// {
// // your code here
//  isPrime(i)
// }
// // Returns true if a number is prime
// function isPrime(n)
// {
//  // your code here
// }


// Solution
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    var z=[];
  var n=0;
  var i=startAt;
  while(n<nPrimes)
  {
      if( isPrime(i))
      {   
          z.push(i);
          
          n++;
      }
      i++;
  }
  return z;

}

// Returns true if a number is prime
function isPrime(n)
{
  if(n<=1)
  {
      return false;
  }
  for(j=2;j<n;j++)
  {
      if(n%j==0)
      {
          return false;
      }
  }
  return true;
}