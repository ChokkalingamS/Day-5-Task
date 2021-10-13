// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
// Input:
// getLastElement([1, 2, 3, 4]);
// Output:
// 4



function array(n)
{
  if(n.length==0)
  {
    console.log(-1);
  }
  else
  {
    let s=n.length-1;
  console.log(n[s]);
  }
}
array([1,2,3,4]);