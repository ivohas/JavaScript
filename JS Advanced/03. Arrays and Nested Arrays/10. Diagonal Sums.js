let arrey=[
    [20, 50, 10],
    [8, 33, 145],
    [1,2,3]]

function solve(matrix){
let mainDiagona=0
 let secondIndex =matrix[0].length - 1;



let mainSum=0;
let secondarySum=0;

matrix.forEach(element => {
    mainSum+=element[mainDiagona++]
    secondarySum+=element[  secondIndex --]
});


return mainSum+' '+secondarySum

}
solve(arrey)