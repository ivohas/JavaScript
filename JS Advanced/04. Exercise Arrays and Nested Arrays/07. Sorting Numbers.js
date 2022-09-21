function rearrangeArray(arr)
{
    // Sorting the array elements
    arr.sort();
 n= arr.lenght;
    // To store modified array
    let tempArr = new Array();
     
    // Adding numbers from sorted array 
    // to new array accordingly
    let ArrIndex = 0;
 
    // Traverse from begin and end simultaneously
    for (let i = 0, j = n-1; i <= n / 2
         || j > n / 2; i++, j--) {
                                     
        if(ArrIndex < n)
        {
            tempArr[ArrIndex] = arr[i];
            ArrIndex++;
        }
         
        if(ArrIndex < n)
        {
            tempArr[ArrIndex] = arr[j];
            ArrIndex++;
        }
    }
 
    // Modifying original array
    for (let i = 0; i < n; i++)
        arr[i] = tempArr[i];
        return arr
}
 
console.log(rearrangeArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))