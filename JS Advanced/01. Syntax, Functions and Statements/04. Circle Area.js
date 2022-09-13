function circleArea(size){
let type= typeof(size);
if(type=="number"){
let area= Math.pow(size,2)*Math.PI;
console.log(area.toFixed(2));
}
else
{

console.log(`We can not calculate the circle area, because we receive a ${type}.`);
}
}
