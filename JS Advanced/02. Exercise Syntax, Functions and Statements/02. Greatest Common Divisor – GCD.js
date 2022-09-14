function gdc(num1,num2){
let divider=0;
for(i=0;i<=num2;i++)
{
    if(num1%i==0&&num2%i==0){
        divider=i;
    }
}
console.log(divider);
}
gdc(15,6);