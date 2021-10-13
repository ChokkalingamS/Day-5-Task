// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:
// getLengthOfWord(“GUVI”);
// getLengthOfWord(“”);
// getLengthOfWord();
// getLengthOfWord(9);





let s=(n)=>
{
  if(typeof(n)=="string")
{
  return n.length;
}
else
{
  return -1;
}
}
console.log(s("GUVI"));
console.log(s(""));
console.log(s());
console.log(s(9));