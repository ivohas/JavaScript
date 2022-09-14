function elements( arr = []){
    let sum=0;
    let conscast='';
    let inverseSum=0;
for(i=0;i<arr.length;i++){
sum+=arr[i];
conscast+=String(arr[i]);
 
inverseSum+=1/arr[i];
}

console.log(sum);
console.log(inverseSum);
console.log(conscast);
}
elements([1, 2, 3]);