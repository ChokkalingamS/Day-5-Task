// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h”);


let s=(n)=>
{
  if(n%2==0)
  {
    return "true";
  }
  else if(typeof(n)=="string")
  {
    return -1;
  }
  else
  {
    return false;
  }
}
console.log(s(12));
console.log(s(0));
console.log(s(11));
console.log(s("11h"));