function rearrangeArray(arr)
{
    result=[]
    arrey= arr.sort()
    let i=arr.lenght;
    while(i>0){

        let a= arrey.pop();
        result.push(a)
        i--;
        if(arrey.lenght<=0){
            break;
        
        }
        i--
        result.push(arrey.shift())



    }
    return result.join('\n')
}
 
console.log(rearrangeArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))