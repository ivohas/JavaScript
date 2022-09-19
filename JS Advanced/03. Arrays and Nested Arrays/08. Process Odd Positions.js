function solve(arr=[]){
let arrey=[];

for(i=0;i<arr.length;i++){

if(i%2!=0){
arrey.push(arr[i]*2);

}

}
arrey.reverse()
console.log(arrey.join(' ').trim())
}
solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])