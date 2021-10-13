// Write a function called “getOpposite”.
// Given a number, return its opposite
function getOpposite(n)
{
  if(n<0)
  {
    return Math.abs(n);
  }
  else if(n==0)
  {
    return n;
  }
  else if (typeof(n)=="string")
  {
    return -1;
  }
  else if(n>0)
  {
    return -n;
  }
} 
console.log(getOpposite(5));  
console.log(getOpposite(0));  
console.log(getOpposite(-5));  
console.log(getOpposite("5a"));  
console.log(getOpposite(5.5));  
  
  
  
  
  
  
  
  
  