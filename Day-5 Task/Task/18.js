// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);


const s=(string1,string2)=>
{
if(string1.length==string2.length)
{
  return true;
}
else 
{
  return false;
}
}
console.log(s("GUVI","GEEK"));
