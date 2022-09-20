let arrey=[
    [20, 50, 10],
    [8, 33, 145]]

function solve(matrix){
let biggest=Number. MIN_VALUE;
    for(let row of matrix){

        for(let num of row){

            if(num>biggest){

                biggest=num
            }
        }
    }
    return biggest
    console.log(biggest)
}    
solve(arrey)