function solve(arr){
arrey=[]
let biggerstNum= arr[0]
for (const iterator of arr) {
    if(iterator>=biggerstNum){
     biggerstNum=iterator;
     arrey.push(iterator)

    }
}
       
return arrey

}
console.log(solve([20, 3, 2, 15,6,1]))