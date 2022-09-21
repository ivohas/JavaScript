function solve(arr){
let numToAdd=1;
let arrey=[]
for(let command of arr){
switch(command){
case"remove":
arrey.pop();
break;
case'add':
arrey.push(numToAdd)
break;
}
numToAdd++;
}
if(arrey.lenght<=0){
    return 'Empty'
}
return arrey.lenght === 0 ? 'Empty' : arrey.join('\n')
}
solve(['add', 'add', 'remove', 'add', 'add'])
console.log(solve(['add', 'add', 'add', 'add']))
console.log(solve['add','remove'])
