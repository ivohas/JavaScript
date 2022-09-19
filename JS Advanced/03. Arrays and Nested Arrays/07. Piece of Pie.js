function solve(arr=[],first,second){
    let firstIndex=0;
    let lastIndex=0;
   let array=[]
    for(i=0;i<arr.length;i++){

        if(arr[i]==first){
            firstIndex=i;
        }
        if(arr[i]==second){
            lastIndex=i;
        }
    }
    for(i=firstIndex;i<=lastIndex;i++){

        array.push(arr[i])
    }
    console.log(array);
}
solve(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')
solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie')