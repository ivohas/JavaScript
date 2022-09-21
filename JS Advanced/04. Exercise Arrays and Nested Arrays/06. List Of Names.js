function solve(names){
//result=names.sort()
//let order=1;
//for (const name of names) {
    
    //console.log(`${order}.${name}`.trim())
   // order++;
//}
names.sort((a,b)=>a.localeCompare(b))
.forEach((a,index)=> console.log(`${index+1}.${a}`))


}
console.log(solve["John",

"Bob",

"Christina",

"Ema"])