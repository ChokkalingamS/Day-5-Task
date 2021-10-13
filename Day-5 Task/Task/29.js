// Create a function that receives an array of numbers and
//  returns an array containing only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function positive(ar)
{
console.log(ar.filter((x)=>x>=0));    
}
positive(ar);