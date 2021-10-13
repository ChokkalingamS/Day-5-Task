// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false


let s=(n)=>
{
  if(n%5==0)
  {
    return "true";
  }
  else 
  {
    return "false";
  }
}
console.log(s(5));
console.log(s(-55));
console.log(s(37));