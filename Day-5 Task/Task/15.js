// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);


let result=(n1,n2)=>
{
  if(n1%2!=0 && n2%2!=0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
console.log(result(1,3));
console.log(result(1,4));
console.log(result(2,3));
console.log(result(0,0)); 
