// Create a function to calculate the distance between two points defined by their x, y coordinates
// console.log(getDistance(100, 100, 400, 300));
// function getDistance(x1, y1, x2, y2)
// {
 
// }

let distance=(x1,y1,x2,y2)=>
{
  let c=((x1-x2)*(x1-x2));
  let d=((y1-y2)*(y1-y2));
  let e=Math.sqrt(c+d);
  return Math.round(e);
}
console.log(distance(100,100,400,300));