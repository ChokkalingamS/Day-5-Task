// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

// Input:
// getFullName(“GUVI”, “GEEK”);
// getFullName(“GUVI”, );
// getFullName(, “GEEK”);
// getFullName(“”, “”);
// 
// “GUVI GEEK”
// “GUVI”
// “GEEK”
// “”



function getFullName(a,b)
{

    if(a.length>1 && b.length>1)
    {
        console.log(`"${a} ${b}"`);
    }
    
   if(a.length>1 )
    {
        console.log(`"${a}"`);
    }
      if(b.length>1 )
    {
        console.log(`"${b}"`);
    }
  
}    
getFullName("GUVI", "GEEK");
getFullName("GUVI", );
getFullName( "GEEK");

