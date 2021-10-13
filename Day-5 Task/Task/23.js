let n=function(s)
{
     if(s%2==0)
     {
         return 'True';
     }
     else if(s%2)
     {
         return "false"
     }
     else
     {
         return "-1"
     }
}
console.log(n(12));
console.log(n(0));
console.log(n(11));
console.log(n("11h"));