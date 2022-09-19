function solve(arr=[]){
    let array = [];
    for(let number of arr){
        if(number>=0)
        {
            array.push(Number(number))

        }
        else{

            array.unshift(Number(number))
        }


    }
    console.log(array.join('\n'))
}
solve([7, -2, 8, 9])