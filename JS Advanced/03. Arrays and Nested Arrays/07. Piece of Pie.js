function solve(arr,first,second){
    const firstIndex=arr.indexOf(first);
    const lastIndex=arr.indexOf(second);
   let result=arr.slice(firstIndex,lastIndex+1) 
  return result;
  
}
solve(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')
solve([ 'Pot Pie',  'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie')