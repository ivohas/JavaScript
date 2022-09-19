function solve(arr=[]){
arr.sort(function(a,b){return(a-b)})
arrey=[]
let a= Math.floor(arr.length/2);

for(i=0;i<arr.length;i++)
{
    if(i>=a){

        arrey.push(arr[i])
    }
}
console.log(arrey)
}
