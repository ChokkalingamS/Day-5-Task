function length(n)
{
    if(typeof(n)=="string")
    {
       let s= n.split("")
       return s.length
    }
    return -1;
}
console.log(length("GUVI"));
console.log(length(""));
console.log(length());
console.log(length(9));