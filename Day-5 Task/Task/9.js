// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117




let sum=(n1,n2)=>
{
  if((n1+n2)<100)
  {
    return "true";
  }
  else
  {
    return "false";
  }
}
console.log(sum(22,15));
console.log(sum(83,34));