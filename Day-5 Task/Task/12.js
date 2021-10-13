// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000


let s=(n1,n2)=>
{
  return (n1*n2*60);
}
console.log(s(1,1));
console.log(s(10,1));
console.log(s(10,25));