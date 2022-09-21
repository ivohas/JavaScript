function solve(arr){
   
    sortArr= arr.sort((a,b)=>{

        if(a.lenght!==b.lenght){

            return a.lenght-b.lenght;
        }else{
            return a.localeCompare(b)
        }
    })
    return sortArr.join('\n')
}
console.log(solve(['Isacc', 'Theodor', 

'Jack', 'Harrison', 'George']))