function solve(arr){
arr.sort(function(a,b){return(a-b)})

let a= Math.floor(arr.length/2);
let result=arr.slice(a)
return result
}
