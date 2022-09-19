function solve(arr=[]){
    Number(arr)
    arrey=[];
for(i=0;i<arr.length-1;i++){
if(arr[i]>=0)
{
arrey.push(arr[i])

}else{
    arrey.unshift(arr[i])
}

console.log(arrey.join('\n'))
}
}
solve([7, -2, 8, 9])