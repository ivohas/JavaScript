function Numbers(number){
let numAsString=String(number);
let char= numAsString[1];
let same= true;
let sum=0;
for(i=0;i<numAsString.length;i++)
{
    if(numAsString[i]!=char){

        same=false;
    }
    
    sum+=Number(numAsString[i]);
}
if(numAsString<=1){
    same=true;
}
console.log(same);
console.log(sum);
}
Numbers(1234);
Numbers(222);
Numbers(1);