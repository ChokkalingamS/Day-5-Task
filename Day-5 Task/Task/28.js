// Return an array, where the first element is the count of positives numbers
//  and the second element is sum of negative numbers.

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function count(arr)
{
    let n=arr.filter((x)=>x<0).reduce(((arr,curr)=>arr+curr),0);
    let p=arr.filter((x)=>x>=0).reduce(((t,v,i,s)=>s.length),0);
     let m=[p,n]
     return m;
}
console.log(count(arr));