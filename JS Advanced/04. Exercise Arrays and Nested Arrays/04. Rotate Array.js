function solve(arr,times)
{
for(i=0;i<times;i++){
let thing= arr.pop();
arr.unshift(thing);

}
console.log(arr.join(' ').trim())
}
solve(['1',

'2',

'3',

'4'],

2)