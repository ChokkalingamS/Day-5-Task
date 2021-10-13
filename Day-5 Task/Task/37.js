// Print the first 100 prime numbers
// printPrimes(100);
// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes)
// {
//  var n = 0;
//  var i = 2;
 
//  while(n < nPrimes)
//  {
//  if (isPrime(i))
//  {
//  console.log(n, “ → “, i);
//  n++;
//  }
 
//  i++;
//  }
// }


printPrimes(100);
// Function prints the first nPrimes numbers
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}
// Returns true if a number is prime
function isPrime(i)
{
   for(let j=2;j<i;j++)
   {
       if(i%j==0)
       {
           return false;
       }

   }
   return true;
  

}