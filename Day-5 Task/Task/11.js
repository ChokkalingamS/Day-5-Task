// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals.
//  The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. 
// You have to implement a function that returns the total number of legs of all the animals.



let legs=(n1,n2,n3)=>
{
  let count =((n1*2)+(n2*4)+(n3*4));
  return count;
}
console.log(legs(2,3,5));
console.log(legs(1,2,3));
console.log(legs(5,2,8));